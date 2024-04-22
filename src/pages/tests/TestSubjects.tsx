import React from "react";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import classes from "./Tests.module.scss";
import InputField from "../../components/fields/InputField";
import { deleteSVG, sendSVG } from "../../assets/icons";

const randomWords = [
  "Математика",
  "Окуп тушунуу",
  "Аналогиялар жана окшоштуктар",
  "Кыргыз тилинин грамматикасы",
];
function TestSubjects() {
  const navigate = useNavigate();
  return (
    <div className={classes.tests}>
      <h2 className={classes.tests__title}>Добавить предмет</h2>
      <div className={classes.tests__form}>
        <InputField label="Название предмета" placeholder="Математика" />
        <Button width={220} text="Добавить предмет" />
      </div>
      <div className={classes.tests__form}>
        <InputField label="Название теста" value="Основной тест" />
      </div>
      <h2 className={classes.tests__title}>Список предметов</h2>
      <ul className={classes.tests__subjects}>
        {randomWords.map((item) => (
          <li>
            <InputField value={item} />
            <Tooltip title="Перейти на предмет">
              <Button
                onClick={() => navigate(`/tests/${1}/themes`)}
                img={sendSVG}
                height={30}
                width={30}
              />
            </Tooltip>
            <Tooltip title="Удалить предмет">
              <Button img={deleteSVG} height={30} width={30} />
            </Tooltip>
          </li>
        ))}
      </ul>
      <Button height={48} width={331} text="Редактировать и сохранить" />
    </div>
  );
}

export default TestSubjects;
