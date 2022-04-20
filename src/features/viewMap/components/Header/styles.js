import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => {
  return {
    title: {
      display: "none",
      "@media(min-width: 600px)": {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: "12px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
      },
      marginRight: 24,
      marginLeft: 0,
      width: "100%",
      "@media(min-width: 600px)": {
        marginLeft: 24,
        width: "auto",
      },
    },
    searchIcon: {
      padding: "0 16px 0 8px",
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: "8px 8px 8px 32px",
      paddingLeft: `calc(1em + 8px}px)`,
      transition: "width 0.4s",
      width: "100%",
      "@media(min-width: 900px)": { width: "20ch" },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});
