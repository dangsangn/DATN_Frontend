import { authGet, authPost } from "apis/clientAxios";

export const getListMessageApi = (idConversation) => {
  const url = "/message/" + idConversation;
  return authGet(url);
};

export const addMessageApi = (idConversation, content) => {
  const url = "/message/" + idConversation;
  return authPost(url, { content });
};

export const createConversationApi = (idReceiver) => {
  const url = "/conversation";
  return authPost(url, { idReceiver });
};

export const getConversationApi = (idUserTwo) => {
  const url = "/conversation/" + idUserTwo;
  return authGet(url);
};

export const getListConversationApi = () => {
  const url = "/conversation";
  return authGet(url);
};
