import { Container } from '@mui/material'
import AppBar from '../../components/Appbar'
import BoardContent from './BoardContent'
import BoardBar from './BoardBar'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board