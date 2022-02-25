import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrderOfUserApi } from "./api";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadingActions } from "features/loading/loadingSlice";
import ImageNoData from "images/nodata.jpg";

const Order = () => {
  const [listOrder, setListOrder] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getListOder = async () => {
      try {
        dispatch(loadingActions.handleLoading(true));
        const res = await getOrderOfUserApi();
        setListOrder(res.data);
        dispatch(loadingActions.handleLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(loadingActions.handleLoading(false));
      }
    };
    return getListOder();
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Danh sách phòng đã đặt: </Title>
      <WrapperBody>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Hình ảnh</TableCell>
                <TableCell align="right">Địa chỉ</TableCell>
                <TableCell align="right">Tình trạng</TableCell>
                <TableCell align="right">Số phòng</TableCell>
                <TableCell align="right">Ngày đặt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOrder.length > 0 ? (
                listOrder.map((order) => (
                  <TableRow
                    key={order?._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="order">
                      {order?._id}
                    </TableCell>
                    <TableCell align="right">
                      <Link to={"/room/" + order?.room?._id}>
                        <Image
                          src={order?.room?.images && order?.room?.images[0]}
                        />
                      </Link>
                    </TableCell>
                    <TableCell>{`${order?.room?.numberHome}, ${order?.room?.nameStress}, ${order?.room?.ward?.label}, ${order?.room?.district?.label}, ${order?.room?.city?.label}`}</TableCell>
                    <TableCell align="right">
                      {order?.isConfirm ? "Đã xác nhận" : "Chờ phản hồi"}
                    </TableCell>
                    <TableCell align="right">{order?.count}</TableCell>
                    <TableCell align="right">
                      {order?.createdAt &&
                        format(new Date(order?.createdAt), "dd/MM/yyyy")}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <td colSpan={6}>
                  <ImageNodata src={ImageNoData} />
                </td>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </WrapperBody>
    </Wrapper>
  );
};

const ImageNodata = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Image = styled.img`
  width: 200px;
  height: 100px;
  object-fit: contain;
`;
const WrapperBody = styled.div``;
const Title = styled.h3`
  margin-bottom: 24px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 50px 32px;
`;
export default Order;
