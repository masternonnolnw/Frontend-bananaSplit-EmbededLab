import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
import { useAuth } from "common/contexts/AuthContext";

export default function NavBar() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1200px)");
  const xsScreen = useMediaQuery("(max-width:755px)");

  const { user, isReady, isAuthenticated } = useAuth();

  return <div className={classes.NavBarLayout}></div>;
}
