import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Select } from "antd";
import classes from "./Documents.module.scss";
import InputField from "../../components/fields/InputField";
import Button from "../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  addGlobalDocumentAction,
  deleteGlobalDocumentAction,
  getGlobalDocumentAction,
} from "../../store/students/actions";
import StudentDocuments from "./Student-documents";

function Documents() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const { documents } = useAppSelector((state) => state.studentReducer);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(addGlobalDocumentAction({ name, type }));
    setName("");
  };
  useEffect(() => {
    dispatch(getGlobalDocumentAction());
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);
  const handleDelete = (id: any) => {
    dispatch(deleteGlobalDocumentAction(id));
  };
  return (
    <div className={classes.documents}>
      {currentUser?.login === "admin@gmail.com" ? (
        <>
          <div className={classes.documents__add}>
            <InputField value={name} onChange={handleChange} label="Название документа" />
            <Select
              placeholder="Тип документ"
              fieldNames={{ value: "id", label: "name" }}
              style={{ width: 320, height: 48 }}
              onChange={(value) => setType(value)}
              options={[
                { id: 1, name: "Документ" },
                { id: 2, name: "Эссе" },
              ]}
            />
            <Button text="Добавить документ" onClick={handleSubmit} />
          </div>
          <div className={classes.documents__table}>
            <div className={classes.documents__table_header}>
              <div>Название</div>
              <div>Создан</div>
              <div>Действие</div>
            </div>
            {documents.map((item: any) => (
              <div aria-hidden className={classes.documents__table_body}>
                <div>{item.name}</div>
                <div>{format(item.created_at, "dd.MM.yyyy")}</div>
                <div>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    text="Удалить"
                    width={100}
                    height={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <StudentDocuments />
      )}
    </div>
  );
}

export default Documents;
