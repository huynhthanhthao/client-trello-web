import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      height: theme => (theme.trello.boardBarHeight),
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Bar
    </Box>
  )
}

export default BoardBar
