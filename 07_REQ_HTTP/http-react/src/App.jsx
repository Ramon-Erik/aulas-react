import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "http://localhost:3001/products"
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0.0)
  
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

  const handleSubmit = async (form) => {
    form.preventDefault()
    const product = {
      price,
      name
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })


  }

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
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço: <input type="number" value={price} name="preco" id="preco" step="0.01" min="0.0" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button>Sub</button>
        </form>
      </div>
    </div>
  );
}

export default App;
