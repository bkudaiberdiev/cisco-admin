import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import classes from "./Students.module.scss";
import Button from "../../components/button/Button";
import InputField from "../../components/fields/InputField";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  assignDocumentsToStudentAction,
  getGlobalDocumentAction,
  getStudentsAction,
} from "../../store/students/actions";
import { statuses } from "../../constants";

function StudentDocuments() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const { documents, students } = useAppSelector((state) => state.studentReducer);
  const dispatch = useAppDispatch();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [document, setDocument] = useState("");
  const params = useParams();
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  useEffect(() => {
    dispatch(getGlobalDocumentAction());
    dispatch(getStudentsAction());
  }, []);

  const handleSubmit = () => {
    const formData = new FormData();
    if (params.id) {
      formData.append("id", params.id);
    }
    if (startDate) {
      // @ts-ignore
      formData.append("deadline", format(new Date(startDate), "yyyy-MM-dd"));
    }
    formData.append("document", document);
    formData.append("file", selectedFile);
    dispatch(assignDocumentsToStudentAction({ id: params.id, formData }));
  };
  const getDocument = () => students.find((item: any) => item.id.toString() === params.id);
  return (
    <>
      <div className={classes.documents}>
        <div className={classes.documents__add}>
          <div className={classes.documents__add_select}>
            <label>Выбрать документ</label>
            <select onChange={(e) => setDocument(e.target.value)}>
              <option value="">Выберите документ</option>
              {documents.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<InputField label="Дедлайн" />}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              showMonthDropdown
            />
          </div>
          <input onChange={handleFileChange} type="file" id="file-input" />
          <Button disabled={!document} onClick={handleSubmit} text="Добавить документ" />
        </div>
      </div>
      <div className={classes.students}>
        <h2 className="title">Документы</h2>
        <div className={classes.students__table}>
          <div className={classes.students__table_header}>
            <div>Название</div>
            <div>Дедлайн</div>
            <div>Статус</div>
            <div>Изменить статус</div>
          </div>
          {getDocument() &&
            getDocument().documents.map((item: any) => (
              <div
                aria-hidden
                className={classes.students__table_body}
                style={{ marginBottom: "10px" }}
              >
                <div>{item.name}</div>
                <div>{item.deadline}</div>
                <div>{statuses[item.status]}</div>
                {item.status === "send" && (
                  <div className={classes.students__table_body_btn}>
                    <Button text="Одобрить" height={30} width={120} />
                    <Button text="Отклонить" height={30} width={120} />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default StudentDocuments;
