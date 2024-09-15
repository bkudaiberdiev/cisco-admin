import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { parseJwt } from "../utils/parseJwt";
import { instance } from "../api";

function WithAuth(Component: any) {
  function WrappedComponent(props: any) {
    const dispatch = useAppDispatch();
    const [tokenExpired, setTokenExpired] = useState(false);
    const token = localStorage.getItem("access");
    const isTokenExpired = () => {
      const decodedToken = parseJwt(token);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTimestamp;
    };

    const refreshToken = () => {
      const refresh = localStorage.getItem("refresh");
      instance
        .post("/api/v1/auth/refresh-token", {
          refreshToken: refresh,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.value.accessToken);
        })
        .catch(() => {
          setTokenExpired(true);
        });
    };
    useEffect(() => {
      if (!token || isTokenExpired()) {
        setTokenExpired(true);
      }
      // else if (isTokenExpired()) {
      //   refreshToken();
      // }
    }, []);
    if (tokenExpired) {
      return <Navigate to="/signin" />;
    }
    return <Component {...props} />;
  }

  return WrappedComponent;
}

export default WithAuth;
