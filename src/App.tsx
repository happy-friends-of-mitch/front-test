import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterNavigation from './component/footerNavigation'
import Home from './pages/homePage'
import Thread from './pages/threadPage'
import NotFound from './pages/notFoundPage'
import Reel from './pages/ReelPage'
import CssBaseLine from '@mui/material/CssBaseline'


const App = () => {
  return (
    <>
    <CssBaseLine />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reel" element={<Reel />} >
            <Route path="thread" element={<Thread />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterNavigation />
      </Router>
    </>
  )
}

export default App
