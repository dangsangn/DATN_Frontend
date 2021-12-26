import { authPost } from "./clientAxios";
export const imageUploadApi = (data) => {
  const url = "upload-images";
  return authPost(url, data);
};
