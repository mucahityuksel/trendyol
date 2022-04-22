import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FavoritePage from "./Pages/Favorites";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import ProductDetailPage from "./Pages/ProductDetail";

function MyRoute() {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/product/:id">
        <ProductDetailPage />
      </Route>
      <Route path="/favorilerim">
        <FavoritePage />
      </Route>
    </Switch>
  </Router>

}

export default MyRoute
