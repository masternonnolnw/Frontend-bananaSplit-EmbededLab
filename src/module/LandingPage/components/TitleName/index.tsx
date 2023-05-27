import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import { useStyles } from "./styles";
export default function FirstParagraph() {
  const { classes } = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
        maxWidth: "90%",
        margin: "0px auto"
      }}
    >
      <Text className={classes.TitleName}>BananaSplit</Text>
    </div>
  );
}
