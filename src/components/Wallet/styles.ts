import styled from "styled-components";

export const Container = styled.section`
  display: block;
  width: 100%;
  min-height: 449px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.COLORS.WHITE};
`;
