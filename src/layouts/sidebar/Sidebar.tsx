import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { arrowRightSVG, logoSVG } from "../../assets/icons";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<string>("Главная");
  const user = localStorage.getItem("user");
  const links = [
    {
      href: "/",
      text: "Главная",
      active: true,
    },
    {
      href: "/documents",
      text: "Документы",
      active: true,
    },
    {
      href: "/news",
      text: "Новости",
      active: true,
    },
    {
      href: "/students",
      text: "Студенты",
      active: user && JSON.parse(user).login === "admin@gmail.com",
    },
    {
      href: "/college-list",
      text: "College list",
      active: user && JSON.parse(user).login !== "admin@gmail.com",
    },
  ];
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <img src={logoSVG} alt="" />
      </div>
      <ul>
        {links.map(
          (link) =>
            link.active && (
              <li
                key={link.href}
                aria-hidden
                onClick={() => {
                  navigate(link.href);
                  setIsActive(link.text);
                }}
                className={link.text === isActive ? classes.active : ""}
              >
                <span>{link.text}</span>
                <img src={arrowRightSVG} alt="" />
              </li>
            ),
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
