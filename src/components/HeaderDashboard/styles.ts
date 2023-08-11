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

  .us-balance {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    .content-left {
      display: flex;
      padding: 24px 48px 24px 24px;
      align-items: center;
      gap: 16px;

      h4 {
        font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
        line-height: 32px;
      }

      p {
        color: ${({ theme }) => theme.COLORS.SECONDARY_500};
        line-height: 24px;
      }

      img {
        display: block;
        width: 64px;
        height: 64px;
      }
    }

    .content-right {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
      display: flex;
      padding: 36px 58px;
      height: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;

      h3 {
        font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
        line-height: 40px;
      }
    }
  }

  .daily-variation {
    display: flex;
    justify-content: space-between;

    .content-left {
      padding: 8px;

      p {
        font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
        color: ${({ theme }) => theme.COLORS.SECONDARY_500};
        margin-bottom: 16px;
      }

      .coin {
        display: flex;
        gap: 8px;
        align-items: center;

        img {
          display: block;
          width: 24px;
          height: 24px;
        }

        p {
          font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
          line-height: 16px;
        }
        margin-bottom: 8px;
      }

      span {
        font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
      }
    }

    .content-right {
      img {
        display: block;
        width: 187px;
        height: 100%;
      }
    }
  }

  .nft-news {
    display: flex;
    justify-content: space-between;

    .content-left {
      padding: 15px 16px;

      span {
        font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
        color: ${({ theme }) => theme.COLORS.SECONDARY_500};
        margin-bottom: 16px;
        margin-top: 5px;
        display: block;
        line-height: 14px;
      }

      a {
        display: block;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.PRIMARY_400};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        line-height: 14px;
      }
    }

    .content-right {
      img {
        display: block;
        width: 140px;
        height: 100%;
      }
    }
  }
`;
