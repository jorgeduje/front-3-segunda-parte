import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Favorites } from "./Components/pages/Favorites";
import { Layout } from "./Components/layout/Layout";
import { Detail } from "./Components/pages/Detail";
import ParentComponent from "./Clase 13/ParentComponent";
import LoboEstepario from "./Clase 13/LoboEstepario";
import EjemploContext from "./Context/EjemploContext";
import Cart from "./Components/pages/Cart";
import ProductContext from "./Context/ProductContext";

function App() {
  return (
    <BrowserRouter>

      {/* <EjemploContext>
        <ParentComponent sal={15000}>
          <h1>Hola, soy el contenido de parent</h1>
          <p>Texto ejemplo</p>
        </ParentComponent>

        <ParentComponent>
          <h3>Este es otro titulo de ejemplo</h3>
          <p>Otra cosa</p>
        </ParentComponent>
        <LoboEstepario/>
      </EjemploContext> */}

      <ProductContext>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/favorites" element={<Favorites />} />
            
            <Route path="/detalle/:id" element={<Detail />}/> 
            <Route path="/carrito" element={<Cart/>}/>
          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
