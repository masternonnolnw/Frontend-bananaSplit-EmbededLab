import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  StatusText: {
    textAlign: "center"
  },
  TimeCount: {
    textAlign: "center",
    textDecoration: "underline"
  },
  Fade: {
    display: "flex",
    zIndex: 3,
    width: "118px",
    height: "118px",
    background: "#FFFFFF"
  }
}));
