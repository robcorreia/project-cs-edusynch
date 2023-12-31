import styled from "styled-components";

interface FooterProps {
  userlogged?: boolean;
}

export const Container = styled.footer<FooterProps>`
  box-shadow: ${(props) =>
    props.userlogged ? "0px -4px 8px 0px rgba(77, 77, 77, 0.1)" : "initial"};
  -webkit-box-shadow: ${(props) =>
    props.userlogged ? "0px -4px 8px 0px rgba(77, 77, 77, 0.1)" : "initial"};
  -moz-box-shadow: ${(props) =>
    props.userlogged ? "0px -4px 8px 0px rgba(77, 77, 77, 0.1)" : "initial"};

  section {
    display: flex;
    justify-content: ${(props) =>
      props.userlogged ? "center" : "space-between"};
    align-items: center;
    height: 64px;

    p {
      font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
      line-height: 14px;
    }
  }
`;
