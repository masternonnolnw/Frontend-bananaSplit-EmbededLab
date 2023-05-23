import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
export default function Footer() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1200px)");
  const xsScreen = useMediaQuery("(max-width:755px)");

  return <div className={classes.FooterContainer}></div>;
}
