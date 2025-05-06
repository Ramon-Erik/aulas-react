import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (form) => {
    form.preventDefault();
    navigate("/search?q=" + query);
  };

  return <form onSubmit={handleSubmit}>
    <label>
      Buscar por nome: <br />
      <input type="text" onChange={(e) => setQuery(e.target.value)}/>
    </label>
    <br />
    <input type="submit" value="Buscar" />
  </form>;
};

export default SearchForm;
