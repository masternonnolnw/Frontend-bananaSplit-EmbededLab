import { MantineNumberSize, Text } from "@mantine/core";

interface BodyTextProps {
  children: React.ReactNode;
  size?: MantineNumberSize;
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  color?: string;
  sx?: any;
}
export default function BodyText(props: BodyTextProps) {
  const { children, size = "md", weight = "600", color = "black", sx } = props;
  return (
    <Text size={size} weight={weight} color={color} sx={sx}>
      {children}
    </Text>
  );
}
