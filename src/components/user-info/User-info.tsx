import React from "react";
import { userSVG } from "../../assets/icons";
import classes from "./User-info.module.scss";

function UserInfo({ width, height, user }: { width: number; height: number; user: any }) {
  return (
    <div className={classes.user_info}>
      <img style={{ width, height }} src={userSVG} alt="" />
      <div>
        <h3>{user?.full_name}</h3>
        <span>{user?.user_type}</span>
      </div>
    </div>
  );
}

export default UserInfo;
