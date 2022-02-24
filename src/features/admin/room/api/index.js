import { authDelete, authGet, authPatch } from "apis/clientAxios";

export const getListRoomApi = (queryString) => {
  const url = "/room?" + queryString;
  return authGet(url);
};

export const deleteRoomApi = (id) => {
  const url = "/room/" + id;
  return authDelete(url);
};

export const verifyRoomApi = ({ id, verify }) => {
  console.log(" id, verify", id, verify);
  const url = "/room/verify/" + id;
  return authPatch(url, { verify });
};

export const getRoomDetailApi = (id) => {
  const url = "/room/" + id;
  return authGet(url);
};
