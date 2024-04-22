import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import InputField from "../../components/fields/InputField";
import Button from "../../components/button/Button";
import { deleteSVG, editSVG } from "../../assets/icons";
import classes from "./Questions.module.scss";
import { randomWords } from "../tests/TestThemes";

const questions = [
  "What is the area of a circle with radius  sdfg  sdf sdf sdf sdfsdfsdf{radius}? las asdfjk; jjsdfh jha sdhf ljh lajshdf ljashdfasdfasdf jasdfasdfasd fsadfsd",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
  "What is the area of a circle with radius {radius}?",
  "Solve for x: {equation}",
  "Find the derivative of {function}",
  "What is the sum of the first {n} natural numbers?",
];
function QuestionThemes() {
  const navigate = useNavigate();
  function renderQuestions() {
    return questions.map((question, index) => (
      <div className={classes.questions__list_item}>
        <div style={{ width: "4%", fontWeight: 600 }}>{index + 1}.</div>
        <span>{question}</span>
        <div>
          <Tooltip title="Редактировать вопрос">
            <Button img={editSVG} height={30} width={30} />
          </Tooltip>
          <Tooltip title="Удалить вопрос">
            <Button img={deleteSVG} height={30} width={30} />
          </Tooltip>
        </div>
      </div>
    ));
  }
  return (
    <div className={classes.questions}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 className={classes.questions__title}>Темы</h1>
        <div className={classes.questions__header}>
          <InputField placeholder="Поиск по вопросам" />
          <Button
            onClick={() => navigate("/questions/1/themes/2")}
            text="Добавить вопрос"
            height={40}
            width={240}
          />
        </div>
      </div>
      <div className={classes.questions__list}>
        <div className={classes.questions__themes}>
          <ul>
            {randomWords.map((item, index) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className={classes.questions__questions}>{renderQuestions()}</div>
      </div>
    </div>
  );
}

export default QuestionThemes;
