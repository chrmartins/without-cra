import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalstyles'
import theme from './styles/theme'
import { Home } from './pages/home/Home'

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
