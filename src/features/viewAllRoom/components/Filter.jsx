import { RadioField } from "components/commons/FormField/RadioField";
import React from "react";
import styled from "styled-components";
import Collapsible from "./Collapsible";
import Listutil from "./ListUtil";
import RangeSlider from "./RangeSlider";
import Typeroom from "./TypeRoom";

const genders = [
  {
    label: "Tất cả",
    value: 3,
  },
  {
    label: "Nam",
    value: 1,
  },
  {
    label: "Nữ",
    value: 2,
  },
];

const Filter = ({clear, control }) => {
  return (
    <Wrapper>
      <WrapPrice>
        <Collapsible clear={clear} title="Giá">
          <WrapCollapsible>
            <RangeSlider control={control} name="price" />
          </WrapCollapsible>
        </Collapsible>
        <Collapsible clear={clear} title="Tiện ích">
          <WrapCollapsible>
            <Listutil control={control} />
          </WrapCollapsible>
        </Collapsible>
        <Collapsible clear={clear} title="Loại phòng">
          <WrapCollapsible>
            <Typeroom control={control} />
          </WrapCollapsible>
        </Collapsible>
        <Collapsible clear={clear} title="Giới tính">
          <WrapCollapsible>
            <RadioField name="gender" options={genders} control={control} />
          </WrapCollapsible>
        </Collapsible>
      </WrapPrice>
    </Wrapper>
  );
};

const WrapCollapsible = styled.div`
  padding: 12px 24px;
`;
const WrapPrice = styled.div``;
const Wrapper = styled.div``;
export default Filter;
