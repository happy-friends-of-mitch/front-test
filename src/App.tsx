import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterNavigation from './component/FooterNavigation'
import Home from './pages/homePage'
import ThreadDetail from './pages/threadDetailsPage'
import NotFound from './pages/notFound'
import QuiltedImageList from './pages/testPageScroll'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/reel" component={QuiltedImageList} />
        <Route path="/threads" component={ThreadDetail} />
        <Route path="/test" component={QuiltedImageList} />
        <Route component={NotFound} />
      </Switch>
      <FooterNavigation />
    </Router>
  )
}

export default App
