import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/BreadCrumb";
import classes from "./Questions.module.scss";

function Questions() {
  const navigate = useNavigate();
  return (
    <div className={classes.questions}>
      <h2 className={classes.questions__title}>Тесты</h2>
      <ul>
        <li aria-hidden onClick={() => navigate(`/questions/${1}`)}>
          1. Основной тест
        </li>
        <li>2. Предметный тест</li>
      </ul>
    </div>
  );
}

export default Questions;
