import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterNavigation from './component/footerNavigation'
import Home from './pages/homePage'
import ThreadDetail from './pages/threadDetailsPage'
import NotFound from './pages/notFoundPage'
import QuiltedImageList from './pages/ReelPage'
import CssBaseLine from '@mui/material/CssBaseline'


const App = () => {
  return (
    <>
    <CssBaseLine />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reel" component={QuiltedImageList} />
          <Route path="/threads" component={ThreadDetail} />
          <Route component={NotFound} />
        </Switch>
        <FooterNavigation />
      </Router>
    </>
  )
}

export default App
