import { Button, Text } from "@mantine/core";
import { theme } from "common/const";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinkButtonProps {
  href?: string;
  bgColor?: string;
  color?: string;
  text: string;
  sx?: any;
  textSx?: any;
  onClick?: () => void;
}
export default function LinkButton(props: LinkButtonProps) {
  const {
    href = "",
    onClick = () => {},
    bgColor = theme.primary,
    color = theme.secondary,
    text,
    sx,
    textSx
  } = props;
  const router = useRouter();
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
        width: "fit-content",
        ...sx,
        "&:hover": {
          backgroundColor: bgColor,
          opacity: "0.8",
          transition: "0.3s"
        }
      }}
      onClick={(e) => {
        if (href != "") {
          e.preventDefault();
          router.push(href);
        } else {
          onClick();
        }
      }}
    >
      <Text
        size={"lg"}
        sx={{
          fontWeight: 700,
          color: color,
          ...textSx
        }}
      >
        {text}
      </Text>
    </Button>
  );
}
