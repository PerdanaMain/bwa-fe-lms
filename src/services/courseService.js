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
