import ButtonSet from "./components/ButtonSet";
import StatusBox from "./components/StatusBox";
import TitleName from "./components/TitleName";

export default function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <div>
        <TitleName />
        <StatusBox />
        <ButtonSet />
      </div>
    </div>
  );
}
