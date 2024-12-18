import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ShopPage">
          <ShopPage />
        </Route>
        <Route path="/ProductDetailPage">
          <ProductDetailPage />
        </Route>
      </Switch>
    </>
  );
}
export default App;
