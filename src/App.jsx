import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Favorites } from "./components/pages/Favorites";
import { Layout } from "./components/layout/Layout";
import { Detail } from "./components/pages/Detail";

import Cart from "./components/pages/Cart";
import ProductContext from "./Context/ProductContext";
import { Comments } from "./Comments";
import { Users } from "./Users";
import { Todos } from "./Todos";

function App() {
  return (
    <BrowserRouter>
      <ProductContext>
        <Routes>
          <Route path="/" element={<Comments />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/detalle/:id" element={<Detail />} />
          <Route path="/carrito" element={<Cart />} />

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
