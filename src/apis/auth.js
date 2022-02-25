import { authPost, authGet } from "./clientAxios";

export const login = async (data) => {
  const url = "auth/login";
  return await authPost(url, data);
};

export const register = async (data) => {
  const url = "auth/register";
  return await authPost(url, data);
};

export const checkEmailApi = async (email) => {
  const url = "auth/email/" + email;
  return await authGet(url);
};
