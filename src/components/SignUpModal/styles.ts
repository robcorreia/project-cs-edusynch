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
    margin-top: 24px;

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

  .terms {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;

    .acceptTerms {
      display: block;
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .acceptTerms input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 16px;
      width: 16px;
      border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_500};
      border-radius: 4px;
    }

    /* On mouse-over, add a grey background color */
    .acceptTerms:hover input ~ .checkmark {
      background-color: ${({ theme }) => theme.COLORS.SECONDARY_300};
    }

    /* When the checkbox is checked, add a blue background */
    .acceptTerms input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .acceptTerms input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .acceptTerms .checkmark:after {
      left: 5px;
      top: 0;
      width: 4px;
      height: 9px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    label {
      margin-left: 16px;
      font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    }
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
    fill: ${(props) => props.clicked && "#FBAB34"};
  }
`;
