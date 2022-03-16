import React from "react";
import styled from "styled-components";
import history from "utils/history";
const Itemdistrict = ({ name, total }) => {
  const handleToSearch = () => {
    history.push("/view-all-room?q=" + name);
  };
  return (
    <Wrapper onClick={handleToSearch}>
      <Name>{name}</Name>
      <Count>Có {total} Phòng</Count>
    </Wrapper>
  );
};

const Count = styled.p``;
const Name = styled.h4``;
const Wrapper = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  color: rgb(65, 17, 159);
  background: rgb(231, 226, 242);
  background: linear-gradient(
    90deg,
    rgba(231, 226, 242, 1) 0%,
    rgba(235, 235, 235, 1) 100%
  );
  transform: translateY(0%);
  transition: all 0.4s linear;
  &:hover {
    transform: translateY(-10%);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;
export default Itemdistrict;
