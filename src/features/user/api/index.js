import { authGet, authPatch } from "../../../apis/clientAxios";

export const getProfile = async () => {
  const url = `user/profile`;
  return await authGet(url);
};

export const getUserSuccessApi = async () => {
  const url = "auth/login/success";
  return await authGet(url);
};

export const updatePasswordApi = async ({ id, password, passwordConfirm }) => {
  const url = "user/update-password/" + id;
  return await authPatch(url, { password, passwordConfirm });
};

export const updateProfileUserApi = async ({ id, ...data }) => {
  const url = "user/" + id;
  return await authPatch(url, data);
};

export const getUserDetailApi = async (id) => {
  const url = "user/" + id;
  return await authGet(url);
};
