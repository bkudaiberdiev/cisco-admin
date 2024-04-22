import React from "react";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import classes from "./Tests.module.scss";
import InputField from "../../components/fields/InputField";
import { deleteSVG, sendSVG } from "../../assets/icons";

export const randomWords = [
  "algebra",
  "geometry",
  "calculus",
  "trigonometry",
  "statistics",
  "probability",
  "arithmetic",
  "equation",
  "variable",
  "function",
  "integral",
  "derivative",
  "matrix",
  "theorem",
  "proof",
  "hypotenuse",
  "exponent",
  "pythagorean",
  "fraction",
  "root",
];
function TestThemes() {
  return (
    <div className={classes.tests}>
      <h2 className={classes.tests__title}>Добавить тему</h2>
      <div className={classes.tests__form}>
        <InputField label="Название темы" placeholder="Уравнение" />
        <Button width={220} text="Добавить темы" />
      </div>
      <div className={classes.tests__form}>
        <InputField label="Название предмета" value="Математика" />
      </div>
      <h2 className={classes.tests__title}>Список темы</h2>
      <ul className={classes.tests__subjects}>
        {randomWords.map((item) => (
          <li>
            <InputField value={item} />
            <Tooltip title="Удалить тему">
              <Button img={deleteSVG} height={30} width={30} />
            </Tooltip>
          </li>
        ))}
      </ul>
      <Button height={48} width={331} text="Редактировать и сохранить" />
    </div>
  );
}

export default TestThemes;
