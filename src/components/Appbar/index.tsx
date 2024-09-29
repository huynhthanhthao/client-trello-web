import { Badge, Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import iitLogo from '~/assets/iit-logo.png'
import WorkSpaces from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import AddIcon from '@mui/icons-material/Add'

function AppBar() {
  return (
    <>
      <Box
        sx={{
          height: theme => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          overflowX: 'auto',
          paddingX: 2
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }}></AppsIcon>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img src={iitLogo} alt="IIT Logo" style={{ width: '20px' }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Typography component="span" variant="body1"
                sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
              Quản lý dự án
              </Typography>
              <WorkSpaces />
              <Recent />
              <Starred />
              <Templates />
              <Button startIcon={<AddIcon/>} variant="outlined">
                Create
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" sx={{ minWidth: 120 }} />
          <ModeSelect />
          <Tooltip title="Thông báo">
            <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Trợ giúp">
            <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
