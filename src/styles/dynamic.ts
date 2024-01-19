import { dynamicStyle, isMeasurement, measurementType } from "./utils";

type roundedStyleParams = { measurement: measurementType };
export const rounded: dynamicStyle<roundedStyleParams> = ({ measurement }) => {
  switch (measurement) {
    case "none":
      return { borderRadius: 0 };
    case "xs":
      return { borderRadius: 1 };
    case "sm":
      return { borderRadius: 2 };
    case "base":
      return { borderRadius: 4 };
    case "md":
      return { borderRadius: 6 };
    case "lg":
      return { borderRadius: 8 };
    case "xl":
      return { borderRadius: 12 };
    case "2xl":
      return { borderRadius: 16 };
    case "3xl":
      return { borderRadius: 24 };
    case "4xl":
      return { borderRadius: 28 };
    case "5xl":
      return { borderRadius: 32 };
    case "6xl":
      return { borderRadius: 36 };
    case "7xl":
      return { borderRadius: 40 };
    case "8xl":
      return { borderRadius: 44 };
    case "9xl":
      return { borderRadius: 48 };
    case "full":
      return { borderRadius: 9999 };
  }
};

type cardStyleParams = {
  bgColor?: React.CSSProperties["color"];
  borderRadius?: React.CSSProperties["borderRadius"] | measurementType;
  borderWidth?: React.CSSProperties["borderWidth"];
  borderColor?: React.CSSProperties["borderColor"];
};
export const card: dynamicStyle<cardStyleParams> = ({
  bgColor = "white",
  borderRadius = "lg",
  borderWidth = 2,
  borderColor = "blck",
}) => {
  return {
    backgroundColor: bgColor,
    borderRadius: isMeasurement(borderRadius)
      ? rounded({ measurement: borderRadius })["borderRadius"]
      : borderRadius,
    bordereWidth: borderWidth,
    borderColor: borderColor,
  };
};

type textSizeSytleParams = { size: measurementType };
export const textSize: dynamicStyle<textSizeSytleParams> = ({ size }) => {
  switch (size) {
    case "xs":
      return {
        fontSize: 12,
        lineHeight: 16,
      };
    case "sm":
      return {
        fontSize: 14,
        lineHeight: 20,
      };
    case "base":
    case "md":
      return {
        fontSize: 16,
        lineHeight: 24,
      };
    case "lg":
      return {
        fontSize: 18,
        lineHeight: 28,
      };
    case "xl":
      return {
        fontSize: 20,
        lineHeight: 28,
      };
    case "2xl":
      return {
        fontSize: 24,
        lineHeight: 32,
      };
    case "3xl":
      return {
        fontSize: 30,
        lineHeight: 36,
      };
    case "4xl":
      return {
        fontSize: 36,
        lineHeight: 40,
      };
    case "5xl":
      return {
        fontSize: 48,
        lineHeight: "1",
      };
    case "6xl":
      return {
        fontSize: 60,
        lineHeight: "1",
      };
    case "7xl":
      return {
        fontSize: 72,
        lineHeight: "1",
      };
    case "8xl":
      return {
        fontSize: 96,
        lineHeight: "1",
      };
    case "9xl":
      return {
        fontSize: 128,
        lineHeight: "1",
      };
    default:
      return {
        fontSize: "inherit",
        lineHeight: "inherit",
      };
  }
};
