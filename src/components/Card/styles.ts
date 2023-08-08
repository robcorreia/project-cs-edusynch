import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 260px;
  box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.05);
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  .icon {
    margin-bottom: 16px;
    width: 64px;
    height: 64px;
  }

  p {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    line-height: 24px;
    margin-bottom: 4px;
  }

  h4 {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    line-height: 32px;
  }

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    line-height: 24px;
  }
`;
