import { useLayout } from "common/contexts/LayoutContext";
import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useStyles } from "./styles";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const { classes } = useStyles();
  const { isHideFooter, isHideNavbar } = useLayout();

  return (
    <div className={classes.LayoutContainer}>
      <Head>
        <title>
          Banana Split Team - Learning and teaching online, made easy.
        </title>
      </Head>

      {!isHideNavbar && <NavBar />}

      <div
        className={classes.ContentContainer}
        style={{
          paddingTop: isHideFooter ? "0px" : "88px"
        }}
      >
        {children}
      </div>

      {!isHideFooter && <Footer />}
    </div>
  );
};

export default Layout;
