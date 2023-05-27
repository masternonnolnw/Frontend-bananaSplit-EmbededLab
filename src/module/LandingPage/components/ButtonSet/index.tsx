import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import { LightSwitchAtom } from "common/atom/LightSwitch";
import { WebcamSwitchAtom } from "common/atom/WebcamSwitch";
import { useAtom } from "jotai";
import { useStyles } from "./styles";
export default function FirstParagraph() {
  const { classes } = useStyles();

  const [lightSwitch, setLightSwitch] = useAtom(LightSwitchAtom);
  const [webcamSwitch, setWebcamSwitch] = useAtom(WebcamSwitchAtom);
  const handleLightSwitch = () => {
    setLightSwitch({ status: false });
  };

  const handleWebcamSwitch = () => {
    setWebcamSwitch({ status: !webcamSwitch.status });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "30px",
        marginBottom: "30px",
        width: "90%",
        maxWidth: "289px",
        margin: "0px auto"
      }}
    >
      <Button
        className={classes.ButtonStyle}
        onClick={handleLightSwitch}
        disabled={!lightSwitch.status}
      >
        <Text>{lightSwitch.status ? "Turn Light On" : "Turn Light Off"}</Text>
      </Button>
      <Button className={classes.ButtonStyle} onClick={handleWebcamSwitch}>
        <Text>{webcamSwitch.status ? "Hide Webcam" : "Show Webcam"}</Text>
      </Button>
    </div>
  );
}
