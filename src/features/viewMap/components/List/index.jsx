import React, { createRef, useEffect, useState } from "react";
import ItemList from "../ItemList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const List = ({ places, childClicked }) => {
  const { loading } = useSelector((state) => state.viewMapReducers);
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <ListContent>
      {loading ? (
        <WrapLoading>
          <CircularProgress />
        </WrapLoading>
      ) : (
        <>
          {places.length === 0
            ? "No have data"
            : places.map((place, i) => (
                <ItemList
                  key={i}
                  place={place}
                  refProp={refs[i]}
                  isSelected={i === Number(childClicked)}
                />
              ))}
        </>
      )}
    </ListContent>
  );
};

const WrapLoading = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListContent = styled.ul`
  overflow: auto;
  height: calc(100vh - 208px);
`;
export default List;
