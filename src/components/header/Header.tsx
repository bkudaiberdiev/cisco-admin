import React from "react";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import UserInfo from "../user-info/User-info";
import classes from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();

  const userDropdown = () => (
    <div className={classes.user__dropdown}>
      <UserInfo width={70} height={70} />
      <ul>
        <li>Личный кабинет</li>
        <li aria-hidden onClick={() => navigate("/signin")}>
          Выйти
        </li>
      </ul>
      <span className={classes.powered}>Powered by Cisco</span>
    </div>
  );
  return (
    <div className={classes.header}>
      <h5 className="mb-0">Онлайн тест</h5>
      <Popover placement="bottomRight" content={userDropdown()} trigger="click">
        <>
          <UserInfo width={40} height={40} />
        </>
      </Popover>
    </div>
  );
}

export default Header;
