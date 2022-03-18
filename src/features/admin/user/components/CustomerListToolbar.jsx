import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userAdminActions } from "../userAdminSlice";

export const CustomerListToolbar = (props) => {
  const dispatch = useDispatch();
  const setTimeoutRef = useRef(null);
  const handleSearchUser = (e) => {
    clearTimeout(setTimeoutRef.current);
    setTimeoutRef.current = setTimeout(() => {
      dispatch(userAdminActions.getListUser({ q: e.target.value }));
    }, 500);
  };
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <MTypography sx={{ m: 1 }} variant="h5">
          Users
        </MTypography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <MTextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Tìm kiếm người dùng"
                variant="outlined"
                onChange={handleSearchUser}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

const MTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    padding: 12px 0;
  }
`;

const MTypography = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;
