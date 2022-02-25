import RoomItem from "features/room/components/RoomItem";
import React from "react";
import styled from "styled-components";

const Listroomrecommend = ({ listRoom }) => {
  return (
    <Wrapper>
      <Title>Có thể bạn quan tâm</Title>
      {listRoom.map((item) => (
        <RoomItem vertical={false} key={item._id} data={item} />
      ))}
    </Wrapper>
  );
};

const Title = styled.h3`
  margin-bottom: 24px;
`;
const Wrapper = styled.div``;
export default Listroomrecommend;
