import { authGet, authPatch } from "apis/clientAxios";

export const getDetailOrderApi = (id) => {
  const url = "order/" + id;
  return authGet(url);
};

export const confirmOrderApi = (id) => {
  const url = "order/confirm/" + id;
  return authPatch(url);
};

export const refuseOrderApi = (id) => {
  const url = "order/refuse/" + id;
  return authPatch(url);
};
