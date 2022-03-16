import { authGet } from "apis/clientAxios";

export const getStatisticUserApi = () => {
  const url = "/user/statistic-month";
  return authGet(url);
};

export const getStatisticRoomApi = () => {
  const url = "/room/statistic-month";
  return authGet(url);
};

export const getStatisticDistrictApi = () => {
  const url = "/room/statistic-district-all";
  return authGet(url);
};
