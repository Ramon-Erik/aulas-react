import { Link } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import './Home.css'

const Home = () => {
  const url = "http://localhost:3001/products";
  const { data: items, httpConfig, loading, error } = useFetch(url);
  return (
    <main>
      <h2>Home</h2>
      {error && <p>Errorrrrrrrrrrrrrrrrrrr</p>}
      {items && (
        <ul className="products">
          {items.map((i) => (
            <li key={i.id}>
              <p>{i.name}</p>
              <p>{i.price}</p>
              <p>
                <Link to={`/product/${i.id}`}>Visitar</Link>
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
