import apiInstance from "../utils/axios";

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
