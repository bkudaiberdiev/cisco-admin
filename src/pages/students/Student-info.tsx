import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Students.module.scss";
import Button from "../../components/button/Button";
import StudentDocuments from "./Student-documents";
import StudentEssay from "./Student-essay";
import StudentUniversity from "./Student-university";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getUserAction } from "../../store/students/actions";

function StudentInfo() {
  const [category, setCategory] = useState("documents");
  const { user } = useAppSelector((state) => state.studentReducer);
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      dispatch(getUserAction(params.id));
    }
  }, []);
  const renderItem = () => {
    switch (category) {
      case "documents":
        return <StudentDocuments />;
      case "essay":
        return <StudentEssay />;
      default:
        return <StudentUniversity />;
    }
  };
  return (
    <div className={classes.students__info}>
      <div className={classes.students__info_btn}>
        <Button
          text="Документы"
          className={category === "documents" ? classes.students__info_btn_active : ""}
          onClick={() => setCategory("documents")}
          width={120}
          height={35}
        />
        <Button
          text="Эссе"
          className={category === "essay" ? classes.students__info_btn_active : ""}
          onClick={() => setCategory("essay")}
          width={100}
          height={35}
        />
        <Button
          text="Университеты"
          className={category === "university" ? classes.students__info_btn_active : ""}
          onClick={() => setCategory("university")}
          width={170}
          height={35}
        />
      </div>
      <h3 className={classes.students__info_title}>{user?.full_name}</h3>
      {renderItem()}
    </div>
  );
}

export default StudentInfo;
