import { useColorScheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import LightModeIcon from '@mui/icons-material/LightMode'

function ModeSelect() {
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

export default ModeSelect
