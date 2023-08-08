import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  body {
    font-family: 'Roboto', monospace;
    color: #5D6670;
  }

.brand-text-coin {
  color: ${({ theme }) => theme.COLORS.PRIMARY_500};
}

.brand-text-synch {
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
}
`;

export default GlobalStyle;
