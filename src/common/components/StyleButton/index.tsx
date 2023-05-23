import { Button, Text } from "@mantine/core";
import { theme } from "common/const";
import Link from "next/link";
import { useRouter } from "next/router";

interface StyleButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  sx?: any;
  onClick?: () => void;
}
export default function StyleButton(props: StyleButtonProps) {
  const { children, onClick = () => {}, bgColor = theme.primary, sx } = props;
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
        onClick();
      }}
    >
      {children}
    </Button>
  );
}
