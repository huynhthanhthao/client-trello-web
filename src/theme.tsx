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
    appBarHeight: '58px',
    boardBarHeight: '68px'
  },
  cssVariables: {
    colorSchemeSelector: '.demo-disable-transition-%s'
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          color: theme.palette.primary.main
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '&.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.primary.light
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main
            }
          }
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: 7,
            height: 7
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: 7
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894'
          }
        }
      }
    }
  }

})

export default theme
