import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalstyles';
import theme from './styles/theme';
import { Home } from './components/pages/home/Home';

import { InputProps } from './components/input/type';

export function App({...props}: InputProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home {...props}/>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}