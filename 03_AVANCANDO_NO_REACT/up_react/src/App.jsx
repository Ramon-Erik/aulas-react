import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import foto from "./assets/Captura de tela 2025-02-03 231404.png";
import ManegeData from "./components/ManegeData";
import ListRender from "./components/ListRender";
import Condition from "./components/Condition";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import Desafio04 from "./components/Desafio04";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const santosCatolicos = [
    { id: Math.floor(Math.random() * 1000), nome: "São Pedro", padroeiro: "dos pescadores", idade: 65 },
    { id: Math.floor(Math.random() * 1000), nome: "São Paulo", padroeiro: "dos missionários", idade: 61 },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Teresa de Ávila", padroeiro: "dos escritores e místicos", idade: 67 },
    { id: Math.floor(Math.random() * 1000), nome: "São Francisco de Assis", padroeiro: "dos animais e ecologistas", idade: 44 },
    { id: Math.floor(Math.random() * 1000), nome: "São João Paulo II", padroeiro: "das famílias", idade: 84 },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Rita de Cássia", padroeiro: "das causas impossíveis", idade: 76 },
    { id: Math.floor(Math.random() * 1000), nome: "São Antônio de Pádua", padroeiro: "dos pobres e objetos perdidos", idade: 36 },
    { id: Math.floor(Math.random() * 1000), nome: "São José", padroeiro: "dos trabalhadores e da Igreja Universal", idade: "desconhecida" },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Cecília", padroeiro: "dos músicos", idade: 23 },
    { id: Math.floor(Math.random() * 1000), nome: "São Tomás de Aquino", padroeiro: "dos estudantes e filósofos", idade: 49 },
    { id: Math.floor(Math.random() * 1000), nome: "São Sebastião", padroeiro: "dos soldados e atletas", idade: 32 },
    { id: Math.floor(Math.random() * 1000), nome: "São Miguel Arcanjo", padroeiro: "dos policiais e paramédicos", idade: "eterno" },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Teresa de Lisieux", padroeiro: "das missões", idade: 24 },
    { id: Math.floor(Math.random() * 1000), nome: "São Judas Tadeu", padroeiro: "das causas perdidas", idade: "desconhecida" },
    { id: Math.floor(Math.random() * 1000), nome: "São Bento", padroeiro: "da Europa e dos monges", idade: 67 },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Clara de Assis", padroeiro: "da televisão", idade: 59 },
    { id: Math.floor(Math.random() * 1000), nome: "São João Batista", padroeiro: "dos pregadores e conversões", idade: 30 },
    { id: Math.floor(Math.random() * 1000), nome: "São Luiz Gonzaga", padroeiro: "dos estudantes e jovens", idade: 23 },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Faustina Kowalska", padroeiro: "da Divina Misericórdia", idade: 33 },
    { id: Math.floor(Math.random() * 1000), nome: "São João Evangelista", padroeiro: "dos escritores e teólogos", idade: "desconhecida" },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Bárbara", padroeiro: "dos bombeiros", idade: "desconhecida" },
    { id: Math.floor(Math.random() * 1000), nome: "São Vicente de Paulo", padroeiro: "das instituições de caridade", idade: 79 },
    { id: Math.floor(Math.random() * 1000), nome: "São Pio de Pietrelcina", padroeiro: "dos doentes", idade: 81 },
    { id: Math.floor(Math.random() * 1000), nome: "Santa Maria Goretti", padroeiro: "das vítimas de agressão", idade: 11 },
    { id: Math.floor(Math.random() * 1000), nome: "São Gregório Magno", padroeiro: "dos músicos e cantores litúrgicos", idade: 64 },
    { id: Math.floor(Math.random() * 1000), nome: "São Martinho de Tours", padroeiro: "dos pobres e soldados", idade: 81 },
  ];

  return (
    <>
      {santosCatolicos.map((santo) => (
        <Desafio04 info={santo} key={santo.id}/>
      ))}
      <Container>
        <h2>bb</h2>
      </Container>
      <Container>
        <h2>aa</h2>
      </Container>
      <Fragment />
      <ShowUserName
        name="ramon"
        nome="Curso de Biblia"
        autor="Pe. Antonio"
        estado="alugado"
      />
      <Condition />
      <ListRender />
      <ManegeData />
      <h1>P cimaa</h1>a
      <div>
        <img
          src="/Captura de tela 2025-02-03 232751.png"
          width="400px"
          alt="screenshot"
        />
      </div>
      <div>
        <img src={foto} alt="screenshot" width="350px" />
      </div>
    </>
  );
}

export default App;
