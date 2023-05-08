import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <>Loading... </>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {products &&
        products.map((prod) => {
          return <p>{prod.title}</p>;
        })}
    </div>
  );
}

//https://dummyjson.com/products
