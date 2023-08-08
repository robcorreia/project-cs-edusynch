import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;

  .label {
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    line-height: 16px;
  }
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 16px;
  height: 16px;
  display: flex;
  margin-right: 16px;
  border: 1px solid #fbab34;
  border-radius: 4px;
  background-color: transparent;

  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)``;
