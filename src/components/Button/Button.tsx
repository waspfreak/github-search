import React, { SyntheticEvent } from "react";
import { ButtonStyle } from './style';

export interface ButtonProps {
  label?: string;
  id?: string;
  value?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  id,
  value,
  ...props
}) => {

  return (
    <div data-testid="button-id">
      <ButtonStyle value={value} id={id} {...props} >
        {label}
      </ButtonStyle>
    </div>
  );
};