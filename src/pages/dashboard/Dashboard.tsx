import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import classes from "./Dashboard.module.scss";
import Button from "../../components/button/Button";
import UserInfo from "../../components/user-info/User-info";
import { newsPNG } from "../../assets/icons";
import { useAppSelector } from "../../hooks/redux";

const items = [
  {
    title: "Эссе",
  },
  {
    title: "Тесты",
  },
  {
    title: "Проекты",
  },
  {
    title: "Документы",
  },
];
function Dashboard() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);
  return (
    <div className={classes.dashboard}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-9 overflow-auto" style={{ height: "85vh" }}>
            <h3 className={`mt-4 ${classes.dashboard__title}`}>
              Добро пожаловать, {currentUser?.full_name}!🌟
            </h3>
            <div className="box">
              <h3 className={classes.dashboard__title}>Прогресс поступления</h3>
              <Steps current={2} labelPlacement="vertical" items={items} />
            </div>
            <div className={`box ${classes.dashboard__documents}`}>
              <h3 className={classes.dashboard__title}>Статус документов</h3>
              <Button
                text="Редактировать"
                height={30}
                width={150}
                className={classes.dashboard_btn}
              />
              <div className={classes.dashboard__documents_header}>
                <h5>Название</h5>
                <h5>Дедлайн</h5>
                <h5>Статус</h5>
              </div>
              <div className={classes.dashboard__documents_body}>
                <span>Эссе</span>
                <span>12.03.2024</span>
                <span>Одобрено</span>
              </div>
              <div className={classes.dashboard__documents_body}>
                <span>Паспорт</span>
                <span>12.03.2024</span>
                <span>Одобрено</span>
              </div>
              <div className={classes.dashboard__documents_body}>
                <span>Транскрипт</span>
                <span>12.03.2024</span>
                <span>Одобрено</span>
              </div>
              <div className={classes.dashboard__documents_body}>
                <span>ID</span>
                <span>12.03.2024</span>
                <span>Одобрено</span>
              </div>
            </div>
            <div className="box">
              <UserInfo width={40} height={40} user={currentUser} />
              <p className="mt-3">
                Привет, дорогой студент! <br />
                <br /> Рад приветствовать тебя на этом захватывающем этапе твоей жизни! Поступление
                в США - это замечательная возможность расширить свои горизонты, приобрести новые
                знания и познакомиться с удивительными людьми. Я здесь, чтобы поддержать тебя на
                каждом шаге этого пути. Если у тебя возникнут вопросы или нужда в помощи, не
                стесняйся обращаться! Желаю тебе удачи и успехов в твоих начинаниях! С наилучшими
                пожеланиями,
                <br />
                <br />
                Твой куратор!
              </p>
            </div>
          </div>
          <div className="col-lg-3 box overflow-auto" style={{ marginTop: "68px", height: "76vh" }}>
            <div className={classes.dashboard__news}>
              <img src={newsPNG} alt="" />
              <h4>Как написать эссе</h4>
              <span>Онлайн семинар: 18-августа</span>
            </div>
            <div className={classes.dashboard__news}>
              <img src={newsPNG} alt="" />
              <h4>Как написать эссе</h4>
              <span>Онлайн семинар: 18-августа</span>
            </div>
            <div className={classes.dashboard__news}>
              <img src={newsPNG} alt="" />
              <h4>Как написать эссе</h4>
              <span>Онлайн семинар: 18-августа</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
