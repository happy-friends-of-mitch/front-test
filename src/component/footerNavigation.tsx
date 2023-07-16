import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { styled } from '@mui/system'
import HomeIcon from '@mui/icons-material/Home'
import NoteIcon from '@mui/icons-material/Note'
import CollectionsIcon from '@mui/icons-material/Collections'

const FooterNavStyled = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed',
  bottom: 0,
})

const FooterNavigation = () => {
  return (
    <Paper>
      <FooterNavStyled>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/reel"
          label="Threads"
          icon={<CollectionsIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="threads"
          label="Thread"
          icon={<NoteIcon />}
        />
      </FooterNavStyled>
    </Paper>
  )
}

export default FooterNavigation
