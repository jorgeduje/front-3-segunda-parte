import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Favorites } from "./Components/pages/Favorites";
import { Layout } from "./Components/layout/Layout";
import { Detail } from "./Components/pages/Detail";

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
