import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { instance } from "../../../api";

export const registerAction = createAsyncThunk("auth/registerAction", async (formData: any) => {
  try {
    const { first_name, last_name, ...withoutNames } = formData;
    const newData = { ...withoutNames, full_name: `${first_name} ${last_name}` };
    const response = await instance.post("/student-hub/register/", newData);
    if (response.status === 200) {
      toast.success("Пользователь успешно зарегистрировался", {
        position: "top-right",
      });
    }
    return null;
  } catch (e: any) {
    const errorMessage = Object.values(e.response.data);
    errorMessage.map((item: any) => toast.error(item));
    return e.message;
  }
});

export const loginAction = createAsyncThunk("auth/loginAction", async (data: any) => {
  try {
    const response = await instance.post("student-hub/login/", data.formData);
    if (response.status === 200) {
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("user", JSON.stringify(response.data));
      data.cb();
      toast.success("Вход совершен", {
        position: "top-right",
      });
    }
    return null;
  } catch (e: any) {
    return toast.error(e.response.data.error, {
      position: "top-right",
    });
  }
});
