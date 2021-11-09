import React, { SyntheticEvent } from "react";
import { TextField } from "./style";

type colorHex = string;

export type ColorEnum = "primaryText" | "secondaryText" | colorHex;

export type TextProps = React.PropsWithChildren<{
  size:
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "li"
  | "body"
  | "error"
  | "label"
  | "button"
  onClick?: (event: SyntheticEvent) => void;
  elementProps?: any;
}>;

export interface TypographyProps extends TextProps {
  color?: ColorEnum;
}
const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  titleLarge: "h5",
  li: "li",
  body: "p",
  label: "label",
  error: "span",
  button: "span",

};

export const Text: React.FC<TextProps> = ({ size, children, ...props }) => {
  return React.createElement(elements[size], props, children);
};

export const Typography: React.FC<TypographyProps> = ({
  size = "h1",
  elementProps,
  children,
}) => {
  return (
    <TextField>
      <Text size={size}
        {...elementProps}>
        {children}
      </Text >
    </TextField>
  );
};