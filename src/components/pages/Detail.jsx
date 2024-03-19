
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/products";
import { useProductStates } from "../../Context/ProductContext";

export const Detail = () => {
  const { id } = useParams();
  const [productSelected, setProductSelected] = useState({});
  const {favs, setFavs, setCart} = useProductStates()
  useEffect(() => {
 
    const getData = async()=>{
      let productData = await getProductById(id);
      setProductSelected(productData);
    }
    getData()

  }, [id]);


  return (
    <div>
      <h1>Titulo : {productSelected.title}</h1>
      <h1>Precio : {productSelected.price}</h1>
      <h1>descripcion : {productSelected.description}</h1>
      <button onClick={() => setFavs([...favs, productSelected])}>⭐</button>
      <button onClick={() => setCart((prev) => [...prev, productSelected])}>🛒</button>
    </div>
  );
};
