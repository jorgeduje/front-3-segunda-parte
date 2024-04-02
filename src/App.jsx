import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Favorites } from "./components/pages/Favorites";
import { Layout } from "./components/layout/Layout";
import { Detail } from "./components/pages/Detail";

import Cart from "./components/pages/Cart";
import ProductContext from "./Context/ProductContext";
import HomeMaterial from "./components/material/HomeMaterial";
import { ProbandoComponentes } from "./components/material/ProbandoComponentes";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import Register from "./components/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <ProductContext>
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
        </ProductContext>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
