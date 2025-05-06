import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hook/useFetch"

const Search = () => {
  const [searchParams] = useSearchParams()
  const url = "http://localhost:3001/products?" + searchParams;
  console.log(url);
  
  const { data: items, httpConfig, loading, error } = useFetch(url);
  return (
    <div>
      <h2>Resultados</h2>
      {error && <p>Errorrrrrrrrrrrrrrrrrrr</p>}
      {items && (
        <ul className="products">
          {items.map((i) => (
            <li key={i.id}>
              <p>{i.name}</p>
              <p>{i.price}</p>
              <p>
                <Link to={`/product/${i.id}`}>Mais informações</Link>
              </p>
            </li>
          ))}
        </ul>
      )}
      {!items || items.length == 0 && <p>Nenhum resultado encontrado</p>}
    </div>
  )
}

export default Search