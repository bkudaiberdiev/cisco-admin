import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { generateHeaders, instance } from "../../../api";

export const getStudentsAction = createAsyncThunk("students/getStudents", async () => {
  try {
    const response = await instance.get("admin/student-documents/", {
      headers: generateHeaders(),
    });
    return response.data;
  } catch (e: any) {
    return toast.error(e.message, {
      position: "top-right",
    });
  }
});

export const getUserAction = createAsyncThunk("students/getUser", async (id: string | number) => {
  try {
    const response = await instance.get(`admin/user/${id}`, {
      headers: generateHeaders(),
    });
    return response.data;
  } catch (e: any) {
    return e.message;
  }
});

export const getGlobalDocumentAction = createAsyncThunk("students/getGlobalDocument", async () => {
  try {
    const response = await instance.get("admin/global-document/", {
      headers: generateHeaders(),
    });
    return response.data;
  } catch (e: any) {
    return toast.error(e.message, {
      position: "top-right",
    });
  }
});
export const addGlobalDocumentAction = createAsyncThunk(
  "students/addGlobalDocument",
  async (data: any, thunkAPI) => {
    try {
      const response = await instance.post("admin/global-document/", data, {
        headers: generateHeaders(),
      });
      if (response.status === 201) {
        thunkAPI.dispatch(getGlobalDocumentAction());
        toast.success("Документ успешно добавлен", {
          position: "top-right",
        });
      }
      return response.data;
    } catch (e: any) {
      return toast.error(e.message, {
        position: "top-right",
      });
    }
  },
);

export const deleteGlobalDocumentAction = createAsyncThunk(
  "students/deleteGlobalDocument",
  async (data: any, thunkAPI) => {
    try {
      const response = await instance.delete(`admin/global-document/${data}`, {
        headers: generateHeaders(),
      });
      if (response.status === 204) {
        thunkAPI.dispatch(getGlobalDocumentAction());
        toast.success("Документ успешно удален", {
          position: "top-right",
        });
      }
      return response.data;
    } catch (e: any) {
      return toast.error(e.message, {
        position: "top-right",
      });
    }
  },
);

export const getStudentDocumentAction = createAsyncThunk("students/getStudentDocumet", async () => {
  try {
    const response = await instance.get("student-hub/document/", {
      headers: generateHeaders(),
    });
    return response.data;
  } catch (e: any) {
    return toast.error(e.message, {
      position: "top-right",
    });
  }
});

export const addEssayAction = createAsyncThunk("students/addEssay", async (url: string) => {
  try {
    const response = await instance.post("student-hub/essay/", url, {
      headers: generateHeaders(),
    });
    if (response.status === 201) {
      toast.success("Ссылка на эссе добавлена", {
        position: "top-right",
      });
    }
    return response.data;
  } catch (e: any) {
    return toast.error(e.message, {
      position: "top-right",
    });
  }
});

export const addStudentDocumentAction = createAsyncThunk(
  "students/addStudentDocumet",
  async (data: any, thunkAPI) => {
    try {
      const response = await instance.post("student-hub/document/", data, {
        headers: generateHeaders(),
      });
      if (response.status === 201) {
        thunkAPI.dispatch(getStudentDocumentAction());
        toast.success("Документ успешно отправлен", {
          position: "top-right",
        });
      }
      return response.data;
    } catch (e: any) {
      return toast.error(e.message, {
        position: "top-right",
      });
    }
  },
);
export const assignDocumentsToStudentAction = createAsyncThunk(
  "student/assignDocumentsToStudent",
  async (data: any, thunkAPI) => {
    try {
      const response = await instance.post(
        `student-hub/student-document/${data.id}`,
        data.formData,
        {
          headers: generateHeaders(),
        },
      );
      if (response.status === 201) {
        thunkAPI.dispatch(getStudentsAction());
        toast.success("Документ добавлен к этому студенту", {
          position: "top-right",
        });
      }
      return response.data;
    } catch (e: any) {
      console.log(e.message, "emssage");
      return toast.error(e.message, {
        position: "top-right",
      });
    }
  },
);
