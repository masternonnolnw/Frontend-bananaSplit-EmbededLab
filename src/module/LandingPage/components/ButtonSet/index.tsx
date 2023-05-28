import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import axios from "axios";
import { LightSwitchAtom } from "common/atom/LightSwitch";
import { TurnOffLightAtom } from "common/atom/TurnOffLight";
import { WebcamSwitchAtom } from "common/atom/WebcamSwitch";
import { baseApiURL } from "common/const";
import { useAtom } from "jotai";
import { useStyles } from "./styles";
export default function FirstParagraph() {
  const { classes } = useStyles();

  const [turnOffLight, setTurnOffLight] = useAtom(TurnOffLightAtom);
  const [lightSwitch, setLightSwitch] = useAtom(LightSwitchAtom);
  const [webcamSwitch, setWebcamSwitch] = useAtom(WebcamSwitchAtom);
  const handleLightSwitch = async () => {
    try {
      setLightSwitch({ status: false });
      setTurnOffLight({ status: true });
      const res = await axios.get(`${baseApiURL}/click`, {
        withCredentials: true
      });
      console.log(res.data);
      setTurnOffLight({ status: true });
    } catch (err) {
      console.log(err);
    }
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
        margin: "0px auto",
        zIndex: 1
      }}
    >
      <Button
        className={classes.ButtonStyle}
        onClick={handleLightSwitch}
        disabled={!lightSwitch.status}
      >
        <Text>
          {lightSwitch.status
            ? "Turn Light Off"
            : turnOffLight.status
            ? "Light Off"
            : "Loading..."}
        </Text>
      </Button>
      <Button className={classes.ButtonStyle} onClick={handleWebcamSwitch}>
        <Text>{webcamSwitch.status ? "Hide Webcam" : "Show Webcam"}</Text>
      </Button>
    </div>
  );
}
