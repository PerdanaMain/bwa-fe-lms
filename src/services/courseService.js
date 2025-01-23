import apiInstance from "../utils/axios";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "../utils/const";

export const getCourses = async (token) =>
  await apiInstance
    .get("/courses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const getCategories = async () =>
  await apiInstance.get("/categories").then((res) => res.data);

export const getCourseById = async (id, token) =>
  await apiInstance
    .get(`/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const createCourse = async (data, token) => {
  await apiInstance
    .post("/courses", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const updateCourse = async (id, data, token) => {
  await apiInstance
    .put(`/courses/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const deleteCourse = async (id) => {
  const session = secureLocalStorage.getItem(STORAGE_KEY);
  const token = session.token;

  await apiInstance
    .delete(`/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const createCourseContent = async (data, token) => {
  await apiInstance
    .post("/courses/content", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const getContentCourse = async (id, token) =>
  await apiInstance
    .get(`/courses/content/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
