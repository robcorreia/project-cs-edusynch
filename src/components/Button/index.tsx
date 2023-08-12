import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
  height: number;
  transparent?: boolean;
  color?: string;
  children: React.ReactNode;
  textSize?: number;
}

export function Button({ size, height, color, textSize = 16, transparent = false, children, ...rest }: ButtonProps) {

  return (
    <Container size={size} color={color} height={height} textSize={textSize} transparent={transparent} {...rest}>
      {children}
    </Container>
  )
}