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
  min-height: 441px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 32px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .form-content {
    border: 1px solid #e0deea;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border-radius: 6px;
    padding: 16px;
    margin-top: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.SECONDARY_300};
    }

    input {
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
        font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
      }
    }
  }

  button {
    margin: 24px auto;
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
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};
  padding: 24px;
`;
