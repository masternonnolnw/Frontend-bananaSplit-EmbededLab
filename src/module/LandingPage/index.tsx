import ButtonSet from "./components/ButtonSet";
import CatSwitch from "./components/CatSwitch";
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
        //alignItems: "center",
        paddingTop: "150px",
        maxWidth: "100%",
        position: "relative"
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          position: "absolute",
          top: "20px",
          right: "20px"
        }}
      >
        <CatSwitch />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TitleName />
        <StatusBox />
        <ButtonSet />
        <div
          style={{
            display: "flex",
            width: "90%"
          }}
        >
          <StreamingWebcam />
        </div>
      </div>
    </div>
  );
}
