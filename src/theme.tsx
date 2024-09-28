import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
})


export default theme