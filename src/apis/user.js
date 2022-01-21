import { authGet } from "./clientAxios";

export const getProfile = async () => {
  const url = `user/profile`;
  return await authGet(url);
};

export const getUserSuccessApi = async () => {
  const url = "auth/login/success";
  return await authGet(url);
};
