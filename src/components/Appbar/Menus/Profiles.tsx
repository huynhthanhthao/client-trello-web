import React from 'react'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Tooltip title="Profiles">
        <IconButton id="basic-button-profiles"
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick} sx={{ padding: 0 }}>
          <Avatar sx={{ width: 34, height: 34 }} alt="Travis Howard" src="https://scontent.fvca3-1.fna.fbcdn.net/v/t39.30808-6/382586242_1961374760914190_8504726185525064127_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2N4scHAmhOELPz6DmVrwPeK4HBKdfQMJ4rgcEp19AwgSwJ4jqrFqfUwuSQSPoqU0e2FbwetTmiaL0F7i5ntsK&_nc_ohc=VLFDBmQhhXoQ7kNvgGipZkt&_nc_pt=1&_nc_ht=scontent.fvca3-1.fna&oh=00_AYDxOSt9YlJ8xwvN7J5ZQa3uJRm31t5cCVp0z2m0l8BG1Q&oe=67008A22" />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr:2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr:2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default Profiles