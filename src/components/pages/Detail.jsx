
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/products";
import { useProductStates } from "../../Context/ProductContext";

export const Detail = () => {
  const { id } = useParams();
  const [productSelected, setProductSelected] = useState({});
  
  const {state, dispatch} = useProductStates()
 console.log( state )

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
      <button onClick={()=> dispatch( {type:"ADD_FAVORITES", payload: productSelected } )}>⭐</button>
      {/* <button onClick={()=> sumar(10)}>⭐</button> */}
      {/* <button onClick={sumar}>⭐</button> */}
      <button>🛒</button>
    </div>
  );
};

