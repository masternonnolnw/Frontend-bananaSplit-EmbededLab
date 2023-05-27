import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  Body: {
    display: "flex",
    width: "50px",
    height: "25px",
    background: "#FFFFFF",
    borderRadius: "50px",
    boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    margin: "0px auto",
    "&:hover": {
      cursor: "pointer"
    }
  },
  NormalMode: {
    display: "flex",
    position: "absolute",
    marginLeft: "5px",
    width: "18px",
    height: "18px",
    borderRadius: "50px",
    background: "#000000"
  },
  CatMode: {
    display: "flex",
    position: "absolute",
    marginLeft: "27px",
    width: "18px",
    height: "18px",
    borderRadius: "50px"
  }
}));
