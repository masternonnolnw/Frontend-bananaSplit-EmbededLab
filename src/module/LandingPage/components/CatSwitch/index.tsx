import { useStyles } from "./styles";
import { Image, Text } from "@mantine/core";
import { CatModeAtom } from "common/atom/CatMode";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FirstParagraph() {
  const { classes } = useStyles();
  const [catMode, setCatMode] = useAtom(CatModeAtom);
  const handleCatSwitch = () => {
    if (!catMode.status) meowSound.play();
    else meowAngry.play();
    setCatMode({ status: !catMode.status });
  };

  const [meowSound, setMeowSound] = useState<any>(null);
  const [meowAngry, setMeowAngry] = useState<any>(null);

  useEffect(() => {
    setMeowSound(new Audio("/Sound/meow.mp3"));
    setMeowAngry(new Audio("/Sound/meow-angry.mp3"));
  }, []);

  const variants = {
    cat: {
      x: 0
    },
    normal: {
      x: -22.5
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        display: "flex",
        width: "100%",
        height: "30px"
      }}
    >
      <div
        className={classes.Body}
        onClick={handleCatSwitch}
        style={{
          // -webkit-tap-highlight-color: transparent;
          WebkitTapHighlightColor: "transparent"
        }}
      >
        <motion.div
          className={classes.CatMode}
          variants={variants}
          animate={catMode.status ? "cat" : "normal"}
        >
          <Image src={catMode.status ? "/paw.png" : "/black.png"} width={18} />
        </motion.div>
        {/* )} */}
      </div>
    </div>
  );
}
