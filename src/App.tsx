import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/homePage' 
import Thread from './pages/threadsPage' 
import ThreadDetail from './pages/threadDetailsPage' 
import NotFound from './pages/notFound'

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/threads">Threads</Link>
        </li>
        <li>
          <Link to="/threadDetail">ThreadDetail</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/threads">
          <Thread />
        </Route>
        <Route path="/threadDetail">
          <ThreadDetail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
