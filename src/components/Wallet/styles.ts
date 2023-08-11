import styled from "styled-components";

export const Container = styled.section`
  display: block;
  width: 100%;
  min-height: 389px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.COLORS.WHITE};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};

    .title {
      display: flex;
      align-items: center;
      gap: 16px;

      img {
        display: block;
        width: 32px;
        height: 32px;
      }

      h4 {
        font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
        line-height: 32px;
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

      span {
        font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
      }
    }
  }
`;

export const EmptyWallet = styled.div`
  width: 100%;
  display: flex;
  height: 310px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    display: block;
    width: 82px;
    margin-bottom: 24px;
  }

  h5 {
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    line-height: 32px;
    margin-bottom: 8px;
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    line-height: 16px;
  }
`;
