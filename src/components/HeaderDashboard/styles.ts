import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  .card {
    border-radius: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    height: 112px;
    background: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
