import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "./components/Chart.jsx";
import { dashboardAdminActions } from "./dashboardSlice.js";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { DoughnutChart } from "./components/DoughnutChart.jsx";

export const optionsRoom = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Thống kê phòng đã đăng hàng tháng",
    },
  },
};

export const optionsUser = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Thống kê người dùng đăng ký hàng tháng",
    },
  },
};

export const optionsDistrict = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Tỉ lệ số lượng trọ từng địa điểm",
    },
  },
};

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

function createData(list) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  list.forEach((item) => (result[item._id - 1] = item.total));
  return result;
}

const Dashboard = () => {
  const { statisticUser, statisticRoom, statisticDistrict } = useSelector(
    (state) => state.dashboarAdmindReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardAdminActions.getStatisticRoom());
    dispatch(dashboardAdminActions.getStatisticUser());
    dispatch(dashboardAdminActions.getStatisticDistrict());
  }, [dispatch]);

  const totalRoom = createData(statisticRoom);
  const totalUser = createData(statisticUser);

  const dataRoom = {
    labels,
    datasets: [
      {
        label: "Số phòng 1 tháng",
        data: totalRoom,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataUser = {
    labels,
    datasets: [
      {
        label: "Số người dùng 1 tháng",
        data: totalUser,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const labelsDistrict = statisticDistrict.map((item) => item._id);
  const totalDistrict = statisticDistrict.map((item) => item.total);
  const backgroundColorDistrict = [];
  const borderColorDistrict = [];
  statisticDistrict.forEach((item) => {
    const random = `${Math.random() * 256},${Math.random() * 256},${
      Math.random() * 256
    },`;
    backgroundColorDistrict.push("rgba(" + random + "0.2)");
    borderColorDistrict.push("rgba(" + random + "1)");
  });
  const dataDistrict = {
    labels: labelsDistrict,
    datasets: [
      {
        label: "# of Votes",
        data: totalDistrict,
        backgroundColor: backgroundColorDistrict,
        borderColor: borderColorDistrict,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item lg={6} md={12}>
          <Chart options={optionsRoom} data={dataRoom} />
        </Grid>
        <Grid item lg={6} md={12}>
          <Chart options={optionsUser} data={dataUser} />
        </Grid>
        <Grid item lg={6} md={12}>
          <DoughnutChart data={dataDistrict} options={optionsDistrict} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px 30px;
`;
export default Dashboard;
