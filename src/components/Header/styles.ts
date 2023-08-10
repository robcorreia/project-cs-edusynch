import styled from "styled-components";

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
