import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMessage: [],
  members: [],
  selectConversation: null,
  listConversation: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getListMessge: (state, action) => {
      state.listMessage = {};
    },
    getListMessgeSuccess: (state, action) => {
      state.listMessage = action.payload;
    },
    getConversation: (state, action) => {
      state.selectConversation = null;
    },
    getConversationSuccess: (state, action) => {
      state.selectConversation = action.payload.idConversation;
      state.members = action.payload.members;
    },
    getListConversation: (state, action) => {},
    getListConversationSuccess: (state, action) => {
      state.listConversation = action.payload;
    },
  },
});

export const messageActions = messageSlice.actions;
const messageRenderers = messageSlice.reducer;
export default messageRenderers;
