import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface HeaderProps {
  userLogged: boolean;
}

export const Container = styled.header<HeaderProps>`
  display: flex;
  height: 64px;
  align-items: center;

  section {
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.userLogged ? "space-between" : "space-around"};
  }

  box-shadow: ${(props) =>
    props.userLogged ? "0px 5px 8px 0px rgba(77, 77, 77, 0.1)" : "initial"};
  -webkit-box-shadow: ${(props) =>
    props.userLogged ? "0px 5px 8px 0px rgba(77, 77, 77, 0.1)" : "initial"};
  -moz-box-shadow: ${(props) =>
    props.userLogged ? "0px 5px 8px 0px rgba(77, 77, 77, 0.1)" : "initial"};
`;

export const Brand = styled.div``;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
  }
`;

export const UserNav = styled.ul`
  list-style: none;
  display: flex;
`;

export const MenuProfile = styled.div`
  display: flex;
  gap: 8px;
`;

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
