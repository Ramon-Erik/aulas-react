import { useState } from "react";

const ListRender = () => {
  const [lista] = useState(["Francisco", "Bernardo", "Egidio"]);
  const [users, setUsers] = useState([
    { id: 1, nome: "Francisco" },
    { id: 2, nome: "Bernardo" },
    { id: 3, nome: "Egidio" },
  ]);
  const deletarRandom = () => {
    const numAleatorio = Math.floor(Math.random() * 4);
    setUsers((prev) => {
      return prev.filter((user) => numAleatorio !== user.id);
    });
  };
  // const adicionarRandom = () => {
  //   const santosCatolicos = [
  //     "São Pedro",
  //     "São Paulo",
  //     "Santa Teresa de Ávila",
  //     "São Francisco de Assis",
  //     "São João Paulo II",
  //     "Santa Rita de Cássia",
  //     "São Antônio de Pádua",
  //     "São José",
  //     "Santa Cecília",
  //     "São Tomás de Aquino",
  //     "São Sebastião",
  //     "São Miguel Arcanjo",
  //     "Santa Teresa de Lisieux",
  //     "São Judas Tadeu",
  //     "São Bento",
  //     "Santa Clara de Assis",
  //     "São João Batista",
  //     "São Luiz Gonzaga",
  //     "Santa Faustina Kowalska",
  //     "São João Evangelista",
  //     "Santa Bárbara",
  //     "São Vicente de Paulo",
  //     "São Pio de Pietrelcina",
  //     "Santa Maria Goretti",
  //     "São Gregório Magno",
  //     "São Martinho de Tours",
  //   ]

  //   const numAleatorio = Math.floor(Math.random() * 26);
  //   setUsers((prev) => {
  //     if (santosCatolicos[numAleatorio]) {
  //       console.log(prev, numAleatorio);
        
  //       return prev.push({
  //         id: numAleatorio,
  //         nome: santosCatolicos[numAleatorio]
  //       });
  //     }
  //   });
  // };
  return (
    <div>
      <ul>
        <li>Minha lista começa aqui</li>
        {users.map((item) => (
          <li key={item.id}>Nome: {item.nome}</li>
        ))}
      </ul>
      <button onClick={deletarRandom}>Deletar user randomicamente</button>
      {/* <button onClick={adicionarRandom}>Adicionar user randomicamente</button> */}
    </div>
  );
};

export default ListRender;
