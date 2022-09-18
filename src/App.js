import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/products/:productId" exact element={<ProductDetails />} />
        <Route path="*"  element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
