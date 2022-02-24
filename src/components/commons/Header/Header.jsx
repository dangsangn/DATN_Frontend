import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useCheckscrollDown } from "hook/checkScrollDown";
import Logo from "images/home.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";
import Routerheader from "./RouterHeader";
import history from "utils/history";

const Header = () => {
  const isDown = useCheckscrollDown();
  const searchRef = useRef(null);
  const handleSearch = (e) => {
    clearTimeout(searchRef.current);

    searchRef.current = setTimeout(() => {
      history.push("/view-all-room?q=" + e.target.value);
    }, [1000]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    history.push("/view-all-room?q=" + Object.fromEntries(formData).search);
  };

  return (
    <WrapHeader status={isDown?.height > 100 && isDown?.status}>
      <WrapContent>
        <Container>
          <WrapLogo to="">
            <img src={Logo} alt="" />
          </WrapLogo>
          <WrapSearch>
            <form onSubmit={handleSubmit}>
              <MOutlinedInput
                variant="outlined"
                type="text"
                name="search"
                placeholder="Tìm theo quận, tên đường, địa điểm"
                onChange={handleSearch}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton color="primary">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </form>
          </WrapSearch>
          <Routerheader />
        </Container>
      </WrapContent>
    </WrapHeader>
  );
};

const MOutlinedInput = styled(OutlinedInput)`
  border-radius: 12px !important;
  background-color: rgba(250, 250, 250, 0.4);
  min-width: 400px;
  border: none !important;
  & input {
    font-size: 16px;
    padding: 8px 16px;
  }
`;
const WrapSearch = styled.div``;
const WrapContent = styled.div`
  padding: 0 32px;
  max-width: 1440px;
  margin: auto;
`;

const WrapLogo = styled(Link)`
  width: 70px;
  height: 46px;
  display: block;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin: auto;
  .active {
    color: ${themes.primary};
  }
`;

const WrapHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: #fff;
  position: fixed;
  top: ${(props) => (props?.status ? "-63px" : 0)};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

export default Header;
