import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  addEssayAction,
  addStudentDocumentAction,
  getGlobalDocumentAction,
  getStudentDocumentAction,
} from "../../store/students/actions";
import classes from "./Documents.module.scss";
import Button from "../../components/button/Button";
import InputField from "../../components/fields/InputField";
import { statuses } from "../../constants";

const style = {
  background: "var(--bg-blue, rgba(242, 243, 255, 1))",
  padding: "30px",
  borderRadius: "8px",
  marginTop: "20px",
};
function StudentDocuments() {
  const [document, setDocument] = useState("");
  const dispatch = useAppDispatch();
  const [essay, setEssay] = useState("");
  const [selectedFile, setSelectFile] = useState("");
  const { studentDocuments, documents } = useAppSelector((state) => state.studentReducer);
  useEffect(() => {
    dispatch(getStudentDocumentAction());
    dispatch(getGlobalDocumentAction());
  }, []);
  const handleChange = (value: string) => {
    setDocument(value);
  };
  const selectFile = (e: any) => {
    const file = e.target.files[0];
    setSelectFile(file);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("document", document);
    formData.append("file", selectedFile);
    dispatch(addStudentDocumentAction(formData));
  };
  const submitEssay = () => {
    dispatch(addEssayAction(essay));
  };
  return (
    <>
      <div className={classes.documents} style={style}>
        <h2 className="title">Мои документы</h2>
        <div className={classes.documents__table}>
          <div className={classes.documents__table_header}>
            <div>Название</div>
            <div>Дедлайн</div>
            <div>Статус</div>
            <div>Щаблон</div>
          </div>
          {studentDocuments.map((item: any) => (
            <div aria-hidden className={classes.documents__table_body}>
              <div>{item.document}</div>
              <div>{item.deadline}</div>
              <div>{statuses[item.status]}</div>
              <Button text="Скачать" width={100} height={30} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 d-flex gap-3">
        <Select
          placeholder="Выберите документ"
          fieldNames={{ value: "id", label: "name" }}
          style={{ width: 320, height: 48 }}
          onChange={handleChange}
          options={documents}
        />
        <input type="file" onChange={selectFile} />
        <Button onClick={handleSubmit} text="Загрузить документ" width={280} />
      </div>
      <div>
        <h2 className="title mt-5">Мой эссе</h2>
        <div className="d-flex align-items-end gap-3">
          <InputField onChange={(e) => setEssay(e.target.value)} label="Ссылка на гугл документ" />
          <Button
            onClick={submitEssay}
            text="Загрузить ссылку"
            style={{ marginBottom: "16px", width: "280px" }}
          />
        </div>
      </div>
    </>
  );
}

export default StudentDocuments;
