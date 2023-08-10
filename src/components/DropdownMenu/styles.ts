import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const DropdownMenuOpen = styled(DropdownMenu.Trigger)`
  border: none;
  background: transparent;
  font-family: "Roboto";
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  outline: none;
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  padding: 16px 24px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  margin-top: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: white;
    position: absolute;
    top: 0;
    right: 16px;
    transform: rotate(45deg);
  }
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  display: flex;
  align-items: center;
  gap: 16px;

  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  cursor: pointer;
  outline: none;

  svg {
    width: 16px;
    height: 16px;
  }
`;
