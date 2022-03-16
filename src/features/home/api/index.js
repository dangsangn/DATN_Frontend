import { authGet } from "apis/clientAxios";

export const getTotalRoomOfDistrictApi = () => {
  const url = "/room/statistic-district";
  return authGet(url);
};
