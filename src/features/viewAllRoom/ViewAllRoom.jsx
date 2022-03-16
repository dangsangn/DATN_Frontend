import { Button, Grid, IconButton, Pagination, Stack } from "@mui/material";
import RoomItem from "features/room/components/RoomItem";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Filter from "./components/Filter";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import { roomActions } from "features/room/roomSlice";
import ImageNoData from "images/nodata.jpg";
import history from "utils/history";
import { useLocation } from "react-router-dom";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
export default function ViewAllRoom() {
  const dispatch = useDispatch();
  const match = useLocation();
  const { listRoom, totalRow } = useSelector((state) => state.roomReducers);
  const { handleSubmit, control, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      price: [],
      utilities: [],
      gender: "",
      typeRoom: "",
    },
  });
  const [filter, setFilter] = useState({
    price: [],
    utilities: [],
    gender: "",
    typeRoom: "",
    _page: 1,
    _limit: 10,
  });
  const [clear, setClear] = useState(false);
  useEffect(() => {
    const queryUrl = queryString.parse(match.search);
    if (queryUrl.verify === "true") {
      queryUrl["verify"] = true;
    }
    setFilter((pre) => ({ ...pre, ...queryUrl }));
  }, [match]);
  useEffect(() => {
    dispatch(roomActions.getListRomm(filter));
  }, [dispatch, filter]);

  const handleChangePage = (event, value) => {
    setFilter({ ...filter, _page: value });
  };

  const handleApplyFilter = (value) => {
    setFilter({ ...filter, ...value });
    setClear(false);
    const queryUrl = queryString.stringify({ ...filter, ...value });
    history.push("/view-all-room?" + queryUrl);
  };

  const handleClear = () => {
    history.push("/view-all-room");
    setFilter({
      price: [],
      utilities: [],
      gender: "",
      typeRoom: "",
      _page: 1,
      _limit: 10,
    });
    setClear(true);
    reset();
  };

  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <WrapFilter>
            <form onSubmit={handleSubmit(handleApplyFilter)}>
              <WrapTitleFilter>
                <TitleFilter>Bộ lọc</TitleFilter>
                <MButton type="submit" color="primary" variant="outlined">
                  Áp dụng
                </MButton>
              </WrapTitleFilter>
              <WrapFilterContent>
                <Filter clear={clear} control={control} />
              </WrapFilterContent>
              <WrapFooterFilter>
                <MButton type="submit" color="primary" variant="text">
                  Áp dụng
                </MButton>
              </WrapFooterFilter>
            </form>
          </WrapFilter>
        </Grid>
        <Grid item md={8}>
          <WrapList>
            <WrapTitleFilter>
              <TitleFilter>
                {filter?.verify ? "Phòng đã được xác thực" : "Phòng mới nhất"}
              </TitleFilter>
              <IconButton color="error" onClick={handleClear}>
                <CleaningServicesIcon />
              </IconButton>
            </WrapTitleFilter>
            <WrapBody>
              {listRoom.length === 0 ? (
                <Image src={ImageNoData} />
              ) : (
                listRoom.map((item) => <RoomItem key={item._id} data={item} />)
              )}
            </WrapBody>
            <WrapFooter>
              <Stack spacing={2}>
                <Pagination
                  count={totalRow ? Math.ceil(totalRow / filter._limit) : 0}
                  page={filter._page}
                  onChange={handleChangePage}
                  color="primary"
                  defaultPage={1}
                />
              </Stack>
            </WrapFooter>
          </WrapList>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;
const WrapFooter = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
`;
const WrapBody = styled.div`
  margin-top: 24px;
`;
const WrapList = styled.div`
  background-color: #fff;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
`;
const WrapFooterFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  background-color: #fff;
`;
const MButton = styled(Button)`
  border-radius: 16px !important;
  border-width: 2px !important;
  text-transform: initial !important;
  font-weight: bold !important;
`;
const WrapFilterContent = styled.div`
  padding: 32px;
  background-color: #f1f1f1;
`;
const TitleFilter = styled.h3`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;
const WrapTitleFilter = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WrapFilter = styled.div`
  background-color: #fff;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 50px 32px;
`;
