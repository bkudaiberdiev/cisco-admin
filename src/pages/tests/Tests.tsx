import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/fields/InputField";
import Button from "../../components/button/Button";
import classes from "./Tests.module.scss";

const tests = ["Основной тест", "Предметный тест", "Другие тесты"];
function Tests() {
  const navigate = useNavigate();
  return (
    <div className={classes.tests}>
      <div className={classes.tests__form}>
        <InputField label="Название теста" placeholder="Основной тест" />
        <InputField label="Время теста" placeholder="Время" />
        <Button width={220} text="Добавить тест" />
      </div>
      <h2 className={classes.tests__title}>Список тестов</h2>
      <div className={classes.tests__list}>
        {tests.map((test, index) => (
          <div className={classes.tests__list_item}>
            <span aria-hidden onClick={() => navigate(`/tests/${1}`)}>
              {`${index + 1}. ${test}`}
            </span>
            <span>Удалить</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tests;
