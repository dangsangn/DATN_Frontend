import { authDelete, authGet } from "apis/clientAxios";

export const getListUserApi = (queryString) => {
  const url = "/user?" + queryString;
  return authGet(url);
};

export const deleteUserApi = (id) => {
  const url = "/user/" + id;
  return authDelete(url);
};
