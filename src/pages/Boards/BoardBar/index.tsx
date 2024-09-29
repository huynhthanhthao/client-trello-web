import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      height: theme => (theme.trello.boardBarHeight),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      borderTop: '1px solid #00bfa5',
      paddingX: 2
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          clickable icon={<DashboardIcon />} label="Quản lý dự án"
        />
        <Chip
          sx={MENU_STYLES}
          clickable icon={<VpnLockIcon />} label="Public/private workspaces"
        />
        <Chip
          sx={MENU_STYLES}
          clickable icon={<AddToDriveIcon />} label="Add to google drive"
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon/>}>Invite</Button>

        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Huynh Thanh Thao">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Huynh Thanh Thao">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Huynh Thanh Thao">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Huynh Thanh Thao">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Huynh Thanh Thao">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
