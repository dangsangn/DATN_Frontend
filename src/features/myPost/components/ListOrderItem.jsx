import { Button, TableCell, TableRow } from "@mui/material";
import { format } from "date-fns";
import { confirmOrderApi, getDetailOrderApi } from "features/order/api";
import React, { useEffect, useState } from "react";
import { loadingActions } from "features/loading/loadingSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { orderActions } from "features/order/orderSlice";

const Listorderitem = ({ idOrder }) => {
  const row = {};
  const [detailOrder, setDetailOrder] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const getDetailOrder = async () => {
      try {
        const res = await getDetailOrderApi(idOrder);
        setDetailOrder(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    return getDetailOrder();
  }, [idOrder]);

  const handleConfirmOrder = async () => {
    try {
      dispatch(loadingActions.handleLoading(true));
      const res = await confirmOrderApi(idOrder);
      if (res.data) {
        setDetailOrder(res.data);
        dispatch(loadingActions.setMessageSuccess("Xác nhận thành công!"));
      }
    } catch (error) {
      console.log(error);
      dispatch(loadingActions.setMessageError("Đã có lỗi xảy ra!"));
    }
  };
  const handleRefuseOrder = () => {
    dispatch(orderActions.refuseOrder(idOrder));
  };

  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {detailOrder?._id}
      </TableCell>
      <TableCell align="right">{detailOrder?.user?.username}</TableCell>
      <TableCell align="right">
        {detailOrder?.createdAt &&
          format(new Date(detailOrder?.createdAt), "dd/MM/yyyy")}
      </TableCell>
      <TableCell align="right">{detailOrder?.user?.phoneNumber}</TableCell>
      <TableCell align="right">
        {!detailOrder?.isConfirm ? (
          <>
            <MButton
              variant="outlined"
              sx={{ marginRight: "12px" }}
              onClick={handleConfirmOrder}
            >
              Xác nhận
            </MButton>
            <MButton
              color="error"
              variant="outlined"
              onClick={handleRefuseOrder}
            >
              Từ chối
            </MButton>
          </>
        ) : (
          <strong>Đã xác nhận</strong>
        )}
      </TableCell>
    </TableRow>
  );
};

const MButton = styled(Button)`
  text-transform: initial !important;
`;
export default Listorderitem;
