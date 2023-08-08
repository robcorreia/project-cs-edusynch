import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(93, 102, 112, 0.9);
`;

export const Content = styled(Dialog.Content)`
  max-width: 448px;
  min-height: 375px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 32px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .password-forgot {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.SECONDARY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
    line-height: 14px;
    float: right;
    margin-top: 9px;
    margin-bottom: 24px;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin: 24px auto;
  }

  .sign-up-button {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.SECONDARY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    line-height: 14px;
    display: block;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonClose = styled(Dialog.Close)`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  position: absolute;
  top: -5px;
  right: 16px;
  cursor: pointer;
`;

export const Title = styled(Dialog.Title)`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
