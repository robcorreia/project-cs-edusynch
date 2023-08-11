import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: calc(100vh - 128px);
  position: fixed;
  top: 64px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding-top: 48px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-top: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_300};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_300};
`;
