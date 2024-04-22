import React from "react";
import { useNavigate } from "react-router-dom";
import { arrowRightSVG } from "../../assets/icons";
import classes from "./Sidebar.module.scss";

const links = [
  {
    href: "/",
    text: "Новости",
  },
  {
    href: "/blogs",
    text: "Блоги",
  },
  {
    href: "/about",
    text: "O нас",
  },
  {
    href: "/tests",
    text: "Тесты",
  },
  {
    href: "/questions",
    text: "Вопросы",
  },
];
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>Cisco Edu</div>
      <ul>
        {links.map((link) => (
          <li key={link.href} aria-hidden onClick={() => navigate(link.href)}>
            <span>{link.text}</span>
            <img src={arrowRightSVG} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
