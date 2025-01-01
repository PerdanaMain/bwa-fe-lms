import apiInstance from "../utils/axios";

export const postSignUp = async (data) =>
  await apiInstance.post("/auth/sign-up", data).then((res) => res.data);
