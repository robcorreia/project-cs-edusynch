import styled from "styled-components";

export const Content = styled.section`
  .label {
    display: block;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    margin-bottom: 8px;
  }
`;

interface InputProps {
  outilened: boolean | undefined;
}

export const Container = styled.div<InputProps>`
  border: ${(props) => (props.outilened ? "1px solid #E0DEEA" : "none")};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-radius: 6px;
  padding: 16px;
  margin-top: 24px;

  svg {
    color: ${({ theme }) => theme.COLORS.SECONDARY_300};
  }
`;

interface ShowPasswordButtonProps {
  clicked: boolean;
}

export const ShowPasswordButton = styled.button<ShowPasswordButtonProps>`
  padding: 0;
  margin: 0 !important;
  border: none;
  background: transparent;
  width: 16px;
  height: 16px;
  cursor: pointer;

  svg {
    color: ${(props) => props.clicked && "#FBAB34"};
  }
`;

export const InputContent = styled.input`
  width: 100%;
  display: block;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: "Roboto", monospace;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.SECONDARY_400};
  }
`;
