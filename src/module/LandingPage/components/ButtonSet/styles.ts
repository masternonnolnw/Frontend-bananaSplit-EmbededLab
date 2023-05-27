import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  ButtonStyle: {
    display: "flex",
    width: "100%",
    height: "70px",
    background: "#FFFFFF",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    color: "#000000",
    "&:hover": {
      transition: "0.2s",
      backgroundColor: "#000000",
      color: "#FFFFFF"
    },
    margin: "0px auto"
  }
}));
