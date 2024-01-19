const measurement = [
  "none",
  "xs",
  "sm",
  "base",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
  "full",
] as const;
export type measurementType = (typeof measurement)[number];

export const isMeasurement = (x: any): x is measurementType => measurement.includes(x);

export type dynamicStyle<T> = (params: T) => React.CSSProperties
