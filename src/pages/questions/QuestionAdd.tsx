import React from "react";
import classes from "./Questions.module.scss";
import InputField from "../../components/fields/InputField";
import FileUpload from "../../components/FileUpload";

function QuestionAdd() {
  return (
    <div className={classes.questions}>
      <h2 className={classes.questions__title}>Добавить вопросы</h2>
      <h6>Тема: Алгебра</h6>
      <div className={classes.questions__add}>
        <InputField label="Текст для вопроса" />
        <FileUpload />
      </div>
    </div>
  );
}

export default QuestionAdd;
