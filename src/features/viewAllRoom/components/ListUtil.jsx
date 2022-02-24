import Checkbboxexpend from "components/commons/FormField/CheckbboxExpend";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Listutil = ({ control }) => {
  return (
    <Wrapper>
      <Checkbboxexpend name="utilities" control={control} md={12} />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Listutil;
