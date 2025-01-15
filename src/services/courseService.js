import apiInstance from "../utils/axios";

export const getCourses = async (token) =>
  await apiInstance
    .get("/courses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
