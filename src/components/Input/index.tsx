import { InputHTMLAttributes, ReactNode, useState } from "react";
import { InputContent, Content, Container, ShowPasswordButton } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  outilened?: boolean | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export function Input({ label, startIcon, type, endIcon, outilened, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const showPwd = type === 'password' && showPassword === true;

  function handleShowPassword(e: any) {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <Content>
      <label className="label">{label}</label>
      <Container outilened={outilened}>
        {startIcon && startIcon}
        <InputContent type={showPwd ? 'text' : type} {...rest} />
        {endIcon && <ShowPasswordButton clicked={showPassword} className="show-password" onClick={handleShowPassword}>{endIcon}</ShowPasswordButton>}
      </Container>
    </Content>
  )
}