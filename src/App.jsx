import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Favorites } from "./components/pages/Favorites";
import { Layout } from "./components/layout/Layout";
import { Detail } from "./components/pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/favorites" element={<Favorites />} />
          
          <Route path="/detalle/:id" element={<Detail />}/> 

        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
