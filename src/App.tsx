import * as React from 'react'
import { createTheme, ThemeProvider, useColorScheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import Select from '@mui/material/Select'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Box, Button } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import LightModeIcon from '@mui/icons-material/LightMode'

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: '.demo-disable-transition-%s'
  },
  colorSchemes: { dark: true }
})


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
  const [disableTransition, setDisableTransition] = React.useState(false)
  return (
    <ThemeProvider
      theme={theme}
      disableTransitionOnChange={disableTransition}
    >
      <Button variant="text" color="success">Text</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Stack
        sx={{
          width: '100%',
          borderRadius: '4px',
          p: 2,
          gap: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: '1s'
        }}
      >
        <ModeSwitcher />
        <FormControlLabel
          control={
            <Switch
              checked={disableTransition}
              onChange={(event) => setDisableTransition(event.target.checked)}
            />
          }
          label="Disable transition"
        />
      </Stack>
    </ThemeProvider>
  )
}

export default App
