import { Image, Overlay } from "@mantine/core";
import axios from "axios";
import { IsLoadingAtom } from "common/atom/IsLoading";
import { LightSwitchAtom } from "common/atom/LightSwitch";
import { SleepingStatusAtom } from "common/atom/SleepingStatus";
import { TurnOffLightAtom } from "common/atom/TurnOffLight";
import { baseApiURL } from "common/const";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import ButtonSet from "./components/ButtonSet";
import CatSwitch from "./components/CatSwitch";
import StatusBox from "./components/StatusBox";
import StreamingWebcam from "./components/StreamingWebcam";
import TitleName from "./components/TitleName";

export default function LandingPage() {
  const setLightSwitch = useSetAtom(LightSwitchAtom);
  const setTurnOffLight = useSetAtom(TurnOffLightAtom);
  const setSleepingStatus = useSetAtom(SleepingStatusAtom);
  const [LoadingStatus, setLoadingStatus] = useAtom(IsLoadingAtom);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resLight = await axios.get(`${baseApiURL}/is_light_on`, {
          withCredentials: true
        });
        const resSleep = await axios.get(`${baseApiURL}/is_sleeping`, {
          withCredentials: true
        });

        // console.log(resLight.data);
        // console.log(resSleep.data);

        if (resSleep.data.value == 1) setSleepingStatus({ status: true });
        else {
          setSleepingStatus({ status: false });
        }
        if (resLight.data.value == 1) setLightSwitch({ status: true });
        else {
          setLightSwitch({ status: false });
          setTurnOffLight({ status: true });
        }
        setLoadingStatus({ status: false });
      } catch (err) {
        console.log(err);
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
        position: "relative",
        overflow: "hidden"
      }}
    >
      {LoadingStatus.status && (
        <Overlay color="#000" opacity={0.35} blur={15} />
      )}
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
            width: "90%",
            height: "auto"
          }}
        >
          <StreamingWebcam />
        </div>
      </div>
    </div>
  );
}
