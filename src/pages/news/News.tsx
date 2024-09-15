import React from "react";
import classes from "./News.module.scss";
import InputField from "../../components/fields/InputField";

function News() {
  return (
    <div className={classes.news}>
      <h2 className={classes.news__title}>Новости</h2>
      <div className={classes.news__add}>
        <InputField label="Название" />
        <InputField label="Описание" />
      </div>
    </div>
  );
}

export default News;
