import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 ${({ theme }) => css`
   html {
     font-size: 62.5%;
   }
   body {
     font-family: 'Popins', sans-serif;
     background: ${theme.colors.darkPurple};
     color: ${theme.colors.lightGrey};
   }
 `}

`

export default GlobalStyles
