import useHideFooter from "common/contexts/LayoutContext/hooks/useHideFooter";
import useHideNavbar from "common/contexts/LayoutContext/hooks/useHideNavbar";
import LandingPage from "module/LandingPage";

export default function home() {
  useHideNavbar();
  useHideFooter();
  return <LandingPage />;
}
