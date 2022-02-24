import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import RoomList from "./components/RoomList";
import { myPostActions } from "./MyPostSlice";

const Mypost = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myPostActions.getListRoomUser());
  }, [dispatch]);

  return (
    <Wrapper>
      <WrapTile>
        <Title>Phòng đã đăng:</Title>
      </WrapTile>
      <WrapBody>
        <RoomList />
      </WrapBody>
    </Wrapper>
  );
};

const WrapBody = styled.div`
  margin-top: 24px;
`;
const Title = styled.h2``;
const WrapTile = styled.div``;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 50px 32px;
`;
export default Mypost;
