import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getStudentsAction } from "../../store/students/actions";
import classes from "./Students.module.scss";

function Students() {
  const { students } = useAppSelector((state) => state.studentReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getStudentsAction());
  }, []);
  const navigate = useNavigate();
  return (
    <div className={classes.students}>
      <h1 className="title">Список студентов</h1>
      <div className={classes.students__table}>
        <div className={classes.students__table_header}>
          <div>Номер</div>
          <div>Полное имя</div>
          <div>Почта</div>
          <div>Номер телефона</div>
        </div>
        {students &&
          students.map((item: any) => (
            <div
              aria-hidden
              onClick={() => navigate(`/students/${item.id}`)}
              className={classes.students__table_body}
            >
              <div>{item.id}</div>
              <div>{item.full_name}</div>
              <div>{item.email}</div>
              <div>{item.phone_number}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Students;
