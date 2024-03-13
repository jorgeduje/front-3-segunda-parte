import { useEffect, useState } from "react";
import { ProductCard } from "../common/ProductCard";

import "./Home.css";
import { getProducts } from "../../api/products";

export const Home = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //     axios.get("https://fakestoreapi.com/products")
  //     .then((res) => setProducts(res.data));

  // }, []);

  useEffect(() => {

    const getData = async ()=>{
      let productsData =  await getProducts()
      setProducts(productsData)
    }
    getData()
  

  }, []);

  return (
    <div className="container-cards">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};
