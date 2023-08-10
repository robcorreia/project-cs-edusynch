import styled from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipTrigger = styled(Tooltip.Trigger)`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const TooltipContent = styled(Tooltip.Content)`
  padding: 8px 24px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.COLORS.PRIMARY_500};
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    top: 10px;
    left: -6px;
    transform: rotate(45deg);
    background: ${({ theme }) => theme.COLORS.PRIMARY_500};
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    line-height: 16px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  }
`;
