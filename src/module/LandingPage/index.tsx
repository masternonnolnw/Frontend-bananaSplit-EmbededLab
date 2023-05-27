import ButtonSet from "./components/ButtonSet";
import StatusBox from "./components/StatusBox";
import StreamingWebcam from "./components/StreamingWebcam";
import TitleName from "./components/TitleName";

export default function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        width: "100%",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
        maxWidth: "100%"
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TitleName />
        <StatusBox />
        <ButtonSet />
        <StreamingWebcam />
      </div>
    </div>
  );
}
