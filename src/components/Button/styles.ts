import styled from "styled-components";

interface ButtonProps {
  size: number;
  height: number;
  transparent: boolean | undefined;
  textSize: number;
}

export const Container = styled.button<ButtonProps>`
  border-radius: 32px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) =>
    props.transparent
      ? "transparent"
      : ({ theme }) => theme.COLORS.PRIMARY_500};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.textSize}px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color: ${(props) => props.color};

  svg {
    margin-left: 10px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
