import { authGet } from "./clientAxios";

export const getRoomsApi = (stringParams) => {
  const url = `/room?${stringParams}`;
  return authGet(url, stringParams);
};
