import { Image } from "@mantine/core";
import { WebcamSwitchAtom } from "common/atom/WebcamSwitch";
import { useAtomValue } from "jotai";

const StreamingWebcam = () => {
  const webcamSwitch = useAtomValue(WebcamSwitchAtom);
  return (
    <Image
      src={"https://picsum.photos/1100/600"}
      alt="streaming"
      width="100%"
      height="auto"
      style={{
        display: webcamSwitch.status ? "block" : "none",
        margin: "30px auto",
        maxWidth: "550px",
        maxHeight: "300px"
      }}
    />
  );
};

export default StreamingWebcam;
