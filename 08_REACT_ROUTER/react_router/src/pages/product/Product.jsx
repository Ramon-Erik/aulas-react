import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = `http://localhost:3001/products/${id}`;
  const { data: prod, httpConfig, loading, error } = useFetch(url);
  console.log(prod);
  return (
    <>
      <p>ID do produto: {id}</p>

      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando produto...</p>}
      {prod && (
        <div>
          <h1>{prod.name}</h1>
          <p>R${prod.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${prod.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
