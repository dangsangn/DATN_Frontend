import { authGet } from "./clientAxios";

export const getProvincesApi = async () => {
  const url = "provinces";
  return await authGet(url);
};

export const getDistrictOfCity = async (params) => {
  const url = `provinces/districts?provinceCode=${params}`;
  return await authGet(url);
};

export const getWardOfDistrict = async (params) => {
  const url = `provinces/wards?districtCode=${params}`;
  return await authGet(url);
};
