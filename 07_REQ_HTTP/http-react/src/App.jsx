import { useEffect, useState } from "react";
import { useFetch } from "./hook/useFetch";
import "./App.css";

function App() {
  const url = "http://localhost:3001/products";
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const {data: items} = useFetch(url)

  // Resgatar dados
  // useeffect executa 4 vezes ;-;
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);
  // console.log(products);

  // add dados
  const handleSubmit = async (form) => {
    form.preventDefault();
    const product = {
      price,
      name,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProd = await res.json();

    // carregamento dinamico
    setProducts((prev) => [...prev, addedProd]);
    setName("")
setPrice("0.0")
  };

  return (
    <div className="App">
      <h1>Oi</h1>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:{" "}
            <input
              type="number"
              value={price}
              name="preco"
              id="preco"
              step="0.01"
              min="0.0"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button>Sub</button>
        </form>
      </div>
      {items && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div>
  );
}

export default App;
