import { Button, Image } from "@mantine/core";
import { WebcamSwitchAtom } from "common/atom/WebcamSwitch";
import { baseApiURL } from "common/const";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";

const StreamingWebcam = () => {
  const webcamSwitch = useAtomValue(WebcamSwitchAtom);

  const [url, setUrl] = useState(`${baseApiURL}/capture`);

  const { classes } = useStyles();

  useEffect(() => {
    setUrl(`${baseApiURL}/capture?${Date.now()}`);
  }, [webcamSwitch.status]);

  const refreshImage = () => {
    setUrl(`${baseApiURL}/capture?${Date.now()}`);
  };

  return (
    <div
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
        style={{
          display: webcamSwitch.status ? "block" : "none",
          margin: "30px auto",
          maxWidth: "289px",
          maxHeight: "300px",
          minHeight: "200px",
          border: "1px solid #000000",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      />
      <Button
        className={classes.ButtonStyle}
        onClick={() => {
          refreshImage();
        }}
        style={{
          display: webcamSwitch.status ? "block" : "none",
          margin: "0px auto",
          marginBottom: "30px",
          width: "90%",
          maxWidth: "289px"
        }}
      >
        Load Image
      </Button>
    </div>
  );
};

export default StreamingWebcam;
