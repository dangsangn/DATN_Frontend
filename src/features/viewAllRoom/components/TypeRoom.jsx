import MCheckbox from "components/commons/FormField/MCheckbox";
import React from "react";
import styled from "styled-components";

const Typeroom = ({ control }) => {
  return (
    <Wrapper>
      <MCheckbox name="typeRoom" control={control} md={12} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Typeroom;
