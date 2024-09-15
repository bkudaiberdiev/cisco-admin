import React, { useEffect, useState } from "react";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import UserInfo from "../user-info/User-info";
import classes from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);
  const userDropdown = () => (
    <div className={classes.user__dropdown}>
      <UserInfo width={70} height={70} user={currentUser} />
      <ul>
        <li>Личный кабинет</li>
        <li
          aria-hidden
          onClick={() => {
            navigate("/signin");
            localStorage.removeItem("access");
          }}
        >
          Выйти
        </li>
      </ul>
      <span className={classes.powered}>Powered by Cisco 2024</span>
    </div>
  );
  return (
    <div className={classes.header}>
      <h5 className="mb-0">Главная</h5>
      <Popover placement="bottomRight" content={userDropdown()} trigger="click">
        <>
          <UserInfo user={currentUser} width={40} height={40} />
        </>
      </Popover>
    </div>
  );
}

export default Header;
