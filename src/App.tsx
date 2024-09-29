import { ThemeProvider, useColorScheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Box, Container, CssBaseline } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import LightModeIcon from '@mui/icons-material/LightMode'
import theme from './theme'


function ModeSwitcher() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  return (
    <Select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark')
      }
      sx={{ minWidth: 120 }}
      size='small'
    >
      <MenuItem value="system">
        <Box sx={{ display: 'flex', alightItem: 'center', gap: 1 }}>
          <SettingsBrightnessIcon fontSize='small'/> System
        </Box>
      </MenuItem>
      <MenuItem value="light">
        <Box sx={{ display: 'flex', alightItem: 'center', gap: 1 }}>
          <LightModeIcon fontSize='small'/> Light
        </Box>
      </MenuItem>
      <MenuItem value="dark">
        <Box sx={{ display: 'flex', alightItem: 'center', gap: 1 }}>
          <DarkModeIcon fontSize='small'/> Dark
        </Box>
      </MenuItem>
    </Select>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
        <Box sx={{
          backgroundColor: 'primary.light',
          height: theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          <ModeSwitcher />
        </Box>
        <Box sx={{
          backgroundColor: 'primary.dark',
          height: theme.trello.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          Board Bar
        </Box>
        <Box sx={{
          backgroundColor: 'primary.yellow',
          height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}>
          Board Content
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
