import React from "react";
import { avatarSVG } from "../../assets/icons";
import classes from "./User-info.module.scss";

function UserInfo({ width, height }: { width: number; height: number }) {
  return (
    <div className={classes.user_info}>
      <img style={{ width, height }} src={avatarSVG} alt="" />
      <div>
        <h3>Бектемир Кудайбердиев</h3>
        <span>Админ</span>
      </div>
    </div>
  );
}

export default UserInfo;
