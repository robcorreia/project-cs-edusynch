import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 64px;
  align-items: center;
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
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
