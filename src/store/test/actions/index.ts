import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { generateHeaders, instance } from "../../../api";

export const getDirectionsAction = createAsyncThunk("test/getDirections", async (_) => {
  try {
    const res = await instance.get("/admin/direction/", {
      headers: generateHeaders(),
    });
    if (res.status === 200) {
      toast.success("Успешно получил");
      return res.data;
    }
  } catch (e: any) {
    return e.message;
  }
});

export const createDirectionAction = createAsyncThunk(
  "test/createDirection",
  async (data: any, thunkAPI) => {
    try {
      const response = await instance.post("/admin/direction/", data, {
        headers: generateHeaders(),
      });
      if (response.status === 201) {
        toast.success("Тест успешно добавлен", {
          position: "top-right",
        });
        thunkAPI.dispatch(getDirectionsAction());
      }
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const deleteDirectionAction = createAsyncThunk(
  "test/deleteDirection",
  async (id: string | number, thunkAPI) => {
    try {
      const res = await instance.delete(`/admin/direction/${id}/`);
      if (res.status === 204) {
        toast.success("Тест успешно удален", {
          position: "top-right",
        });
        thunkAPI.dispatch(getDirectionsAction());
      }
      return null;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const getSubjectsActions = createAsyncThunk(
  "test/getSubjectsAction",
  async (id: string | number, thunkAPI) => {
    try {
      const res = await instance.get(`/admin/subject?direction_id=${id}`, {
        headers: generateHeaders(),
      });
      return res.data;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const deleteSubjectActions = createAsyncThunk(
  "test/deleteSubjectActions",
  async (data: any, thunkAPI) => {
    try {
      const res = await instance.delete(`/admin/subject/${data.id}/`);
      if (res.status === 204) {
        toast.success("Предмет успешно удален", {
          position: "top-right",
        });
        thunkAPI.dispatch(getSubjectsActions(data.directionId));
      }
      return null;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const addSubjectActions = createAsyncThunk(
  "test/addSubjectAction",
  async (data: any, thunkAPI) => {
    try {
      const res = await instance.post("/admin/subject/", data, {
        headers: generateHeaders(),
      });
      if (res.status === 201) {
        toast.success("Предмет успешно добавлен", {
          position: "top-right",
        });
        thunkAPI.dispatch(getSubjectsActions(data.direction));
      }
      return null;
    } catch (e: any) {
      return e.message;
    }
  },
);
export const getThemeAction = createAsyncThunk(
  "test/getThemeAction",
  async (id: string | number) => {
    try {
      const res = await instance.get(`/admin/theme?subject_id=${id}`, {
        headers: generateHeaders(),
      });
      return res.data;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const addThemeActions = createAsyncThunk(
  "test/addThemeActions",
  async (data: any, thunkAPI) => {
    try {
      const res = await instance.post("/admin/theme/", data, {
        headers: generateHeaders(),
      });
      if (res.status === 201) {
        toast.success("Тема успешна добавлена", {
          position: "top-right",
        });
        thunkAPI.dispatch(getThemeAction(data.subject));
      }
      return null;
    } catch (e: any) {
      return e.message;
    }
  },
);

export const deleteThemeAction = createAsyncThunk(
  "test/deleteThemeAction",
  async (data: any, thunkAPI) => {
    try {
      const res = await instance.delete(`/admin/theme/${data.id}`, {
        headers: generateHeaders(),
      });
      if (res.status === 204) {
        toast.success("Тема успешна удалена", {
          position: "top-right",
        });
        thunkAPI.dispatch(getThemeAction(data.subject));
      }
      return null;
    } catch (e: any) {
      return e.message;
    }
  },
);
