import { useState } from "react";
import { useFetch } from "./hook/useFetch";
import "./App.css";

function App() {
  const url = "http://localhost:3001/products";
  const [idProduct, setIdProduct] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const { data: items, httpConfig, loading, error, deleteProduct } = useFetch(url);

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
  const handleDelete = async (id) => {
    httpConfig(null, "DELETE", id)
  }

  const handleSubmit = async (form) => {
    form.preventDefault();
    const product = {
      price,
      name,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProd = await res.json();

    // carregamento dinamico
    // setProducts((prev) => [...prev, addedProd]);
    httpConfig(product, "POST");
    setName("");
    setPrice("0.0");
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
              required
            />
          </label>
          <label>
            Preço:{" "}
            <input
              required
              type="number"
              value={price}
              name="preco"
              id="preco"
              step="0.01"
              min="0.0"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {!loading && <button>Enviar</button>}
          {loading && <button disabled>Aguarde</button>}
        </form>
      </div>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {items && !loading && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Função</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
