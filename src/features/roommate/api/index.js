import { authPatch } from "apis/clientAxios";

export const updateRoomOrderApi = async ({ id, count }) => {
  const url = "room/update-room-order/" + id;
  return await authPatch(url, { count });
};
