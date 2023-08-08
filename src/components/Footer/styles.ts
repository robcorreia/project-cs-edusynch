import styled from "styled-components";

export const Container = styled.footer`
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    p {
      font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
      line-height: 14px;
    }
  }
`;
