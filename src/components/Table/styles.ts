import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-spacing: 0;

  thead {
    text-align: left;

    th {
      font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
      color: ${({ theme }) => theme.COLORS.SECONDARY_500};
      line-height: 16px;
      padding-left: 24px;

      &:last-child {
        text-align: right;
        padding-right: 24px;
        padding-left: 0;
      }
    }
  }

  tbody {
    text-align: left;

    td {
      font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
      color: ${({ theme }) => theme.COLORS.TEXT};
      line-height: 24px;
      padding: 16px 24px;

      svg {
        width: 32px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 16px;
      }
    }
  }

  tbody tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  }

  .position {
    color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  }

  .coin {
    span {
      color: ${({ theme }) => theme.COLORS.SECONDARY_500};
    }
  }

  .buy-button {
    width: 80px;
    height: 32px;
    background: ${({ theme }) => theme.COLORS.TERTIARY_700};
    border-radius: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    padding: 8px 18px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  td.trade {
    float: right;
  }

  .transfer-button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;

    img {
      display: block;
    }
  }
`;
