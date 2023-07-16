import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
          <Route exact path="/reel" component={QuiltedImageList} />
          <Route exact path="/threads" component={ThreadDetail} />
          <Route component={NotFound} />
          <Route render={() => (<Redirect to="/" />)} />
        </Switch>
        <FooterNavigation />
      </Router>
    </>
  )
}

export default App
