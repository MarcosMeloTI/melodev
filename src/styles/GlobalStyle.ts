import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-weight: ${({ theme }) => theme.lineHeight.small};
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors['gray-600']};
    color: ${({ theme }) => theme.colors['gray-100']};
    -webkit-font-smoothing: antialiased;
  }
`
