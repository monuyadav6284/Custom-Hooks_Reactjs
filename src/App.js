import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [state, setstate] = useState();
  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = async () => {
    try {
      const product = await fetch("https://fakestoreapi.com/products");
      const productjson = await product.json(); // Wait for the promise to resolve
      setstate(productjson);
    } catch (error) {
      console.log(error);
    }
     
    
  };

  console.log("data from api", state);

  return (
    <>
      <h1> Welcome to our website!</h1>
      {state &&
        state.map((product) => (
          <div key={product.id}>
            <h2>{product.price}</h2>
            <img src={product.image} alt={product.name} />
            
          </div>
        ))}
    </>
  );
}

export default App;
