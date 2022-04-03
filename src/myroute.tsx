import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";

function MyRoute() {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  </Router>

}

export default MyRoute
