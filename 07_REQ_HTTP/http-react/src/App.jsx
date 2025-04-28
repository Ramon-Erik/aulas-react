import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "http://localhost:3001/products"
  const [products, setProducts] = useState([])
  
  // Resgatar dados
  // useeffect executa 4 vezes ;-;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  }, [])
  console.log(products)

  return (
    <div className="App">
      <h1>Oi</h1>
      {
        products.length >= 3 && (
          <ul>
            {
              products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;
