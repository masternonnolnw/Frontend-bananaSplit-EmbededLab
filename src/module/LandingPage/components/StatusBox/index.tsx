import { useStyles } from "./styles";
import { Image, Text } from "@mantine/core";
import { SleepingStatusAtom } from "common/atom/SleepingStatus";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { CatModeAtom } from "common/atom/CatMode";
import { motion } from "framer-motion";

export default function FirstParagraph() {
  const { classes } = useStyles();
  const [sleepingStatus, setSleepingStatus] = useAtom(SleepingStatusAtom);
  const handleSleepingStatus = () => {
    setSleepingStatus({ status: !sleepingStatus.status });
  };
  const [date, setDate] = useState(new Date());
  const [timeShow, setTimeShow] = useState("");
  const [catMode, setCatMode] = useAtom(CatModeAtom);
  const variants = {
    cat: { opacity: 100 },
    normal: {
      opacity: 0
    }
  };
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
      <div
        style={{
          maxWidth: "90%"
        }}
      >
        <motion.div
          variants={variants}
          animate={catMode.status ? "cat" : "normal"}
          transition={{
            duration: 0.1
          }}
          style={{
            position: "absolute",
            zIndex: 1,
            left: "50%",
            transform: "translate(-50%, 0)",
            backgroundColor: "white"
          }}
        >
          <Image
            src={
              sleepingStatus.status ? "/cat-sleeping.gif" : "/capoo-bug-cat.gif"
            }
            alt="status"
            width="auto"
            height={118}
          />
        </motion.div>
        <Image
          src={sleepingStatus.status ? "/moon.gif" : "/sun.gif"}
          alt="status"
          width="auto"
          height={118}
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
