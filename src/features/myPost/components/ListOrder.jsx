import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Listorderitem from "./ListOrderItem";
import styled from "styled-components";
import ImageNoData from "images/nodata.jpg";

export default function ListOrder({ userOrder }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Tên người đặt</TableCell>
            <TableCell align="right">Ngày đặt</TableCell>
            <TableCell align="right">Số điện thoại</TableCell>
            <TableCell align="right">Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userOrder ? (
            userOrder.map((order, index) => (
              <Listorderitem key={index} idOrder={order} />
            ))
          ) : (
            <td colSpan={6}>
              <ImageNodata src={ImageNoData} />
            </td>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ImageNodata = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;
