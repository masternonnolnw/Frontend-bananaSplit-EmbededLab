import { useStyles } from "./styles";
import { Image, Text } from "@mantine/core";
import { SleepingStatusAtom } from "common/atom/SleepingStatus";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
export default function FirstParagraph() {
  const { classes } = useStyles();
  const [sleepingStatus, setSleepingStatus] = useAtom(SleepingStatusAtom);
  const handleSleepingStatus = () => {
    setSleepingStatus({ status: !sleepingStatus.status });
  };
  const [date, setDate] = useState(new Date());

  const [timeShow, setTimeShow] = useState("");

  useEffect(() => {
    const time = date.toLocaleTimeString();
    if (time) setTimeShow(time);
  }, [date]);

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "20px"
      }}
    >
      <div style={{ maxWidth: "250px", maxHeight: "250px" }}>
        <Image
          src={sleepingStatus.status ? "/moon.png" : "/sun.png"}
          alt="status"
        />
      </div>
      <div>
        <Text className={classes.StatusText}>
          {sleepingStatus.status ? "Sleeping" : "Awake"}
        </Text>
      </div>
      <div>{timeShow}</div>
    </div>
  );
}
