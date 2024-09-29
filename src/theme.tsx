import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'


declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
    };
  }
  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
    cssVariables?: {
      colorSchemeSelector?: string;
    };
  }
}

const theme = createTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  cssVariables: {
    colorSchemeSelector: '.demo-disable-transition-%s'
  },
  palette: {
    mode: 'light'
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: cyan[500]
        },
        secondary: {
          main: orange[500]
        }
      }
    },
    light: {
      palette: {
        primary: {
          main: teal[500]
        },
        secondary: {
          main: deepOrange[500]
        }
      }
    }
  }
})

export default theme
