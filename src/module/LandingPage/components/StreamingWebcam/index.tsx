import { Button, Image } from "@mantine/core";
import { WebcamSwitchAtom } from "common/atom/WebcamSwitch";
import { baseApiURL } from "common/const";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { motion } from "framer-motion";

const StreamingWebcam = () => {
  const webcamSwitch = useAtomValue(WebcamSwitchAtom);

  const [url, setUrl] = useState(`${baseApiURL}/capture`);

  const { classes } = useStyles();

  const variants = {
    on: {
      opacity: 1
    },
    off: {
      opacity: 0,
      y: -220
    }
  };

  useEffect(() => {
    setUrl(`${baseApiURL}/capture?${Date.now()}`);
  }, [webcamSwitch.status]);

  const refreshImage = () => {
    setUrl(`${baseApiURL}/capture?${Date.now()}`);
    // setUrl(`https://picsum.photos/seed/${Date.now()}/1100/600`);
  };

  return (
    <motion.div
      variants={variants}
      animate={webcamSwitch.status ? "on" : "off"}
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Image
        src={url}
        alt="streaming"
        width="100%"
        height="auto"
        withPlaceholder
        sx={{
          margin: "30px auto",
          maxWidth: "289px",
          maxHeight: "300px",
          border: "1px solid #000000",
          borderRadius: "10px",
          overflow: "hidden",
          minHeight: "150px",
          ".mantine-Image-placeholder": {
            minHeight: "150px"
          }
        }}
      />
      <Button
        className={classes.ButtonStyle}
        onClick={() => {
          refreshImage();
        }}
        style={{
          margin: "0px auto",
          marginBottom: "30px",
          width: "90%",
          maxWidth: "289px"
        }}
      >
        Load Image
      </Button>
    </motion.div>
  );
};

export default StreamingWebcam;
