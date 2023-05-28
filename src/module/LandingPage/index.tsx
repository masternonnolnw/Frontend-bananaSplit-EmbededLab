import { Image } from "@mantine/core";
import axios from "axios";
import { LightSwitchAtom } from "common/atom/LightSwitch";
import { TurnOffLightAtom } from "common/atom/TurnOffLight";
import { baseApiURL } from "common/const";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import ButtonSet from "./components/ButtonSet";
import CatSwitch from "./components/CatSwitch";
import StatusBox from "./components/StatusBox";
import StreamingWebcam from "./components/StreamingWebcam";
import TitleName from "./components/TitleName";

export default function LandingPage() {
  const setLightSwitch = useSetAtom(LightSwitchAtom);
  const setTurnOffLight = useSetAtom(TurnOffLightAtom);

  useEffect(() => {
    const fetchData = async () => {
      const resLight = await axios.get(
        `${baseApiURL}/is_light_on?${Date.now()}`,
        { withCredentials: true }
      );
      if (resLight.data === 1) setLightSwitch({ status: true });
      else if (resLight.data === 0) {
        setLightSwitch({ status: false });
        setTurnOffLight({ status: true });
      }
    };
    fetchData();
  }, []);

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
