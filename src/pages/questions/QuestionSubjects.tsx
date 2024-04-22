import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Questions.module.scss";

const randomWords = [
  "Математика",
  "Окуп тушунуу",
  "Аналогиялар жана окшоштуктар",
  "Кыргыз тилинин грамматикасы",
];
function QuestionSubjects() {
  const navigate = useNavigate();
  return (
    <div className={classes.questions}>
      <h2 className={classes.questions__title}>Предметы</h2>
      <ul>
        {randomWords.map((item, index) => (
          <li aria-hidden onClick={() => navigate(`/questions/1/themes`)}>
            {`${index + 1}. ${item}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionSubjects;
