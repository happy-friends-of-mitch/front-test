import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterNavigation from "./component/FooterNavigation";
import Home from "./pages/homePage";
import Thread from "./pages/threadsPage";
import ThreadDetail from "./pages/threadDetailsPage";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/threads" component={Thread} />
        <Route path="/thread" component={ThreadDetail} />
        <Route component={NotFound} />
      </Switch>
      <FooterNavigation />
    </Router>
  )
}

export default App;