import styled from "styled-components";

export const Container = styled.div`
  line-height: 32px;
  display: flex;
  max-width: max-content;
  align-items: center;
  height: 40px;
  justify-content: center;
  padding: 5px 16px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};

  h5 {
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  }
`;
