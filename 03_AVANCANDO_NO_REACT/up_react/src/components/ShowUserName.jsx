import React from "react";

const ShowUserName = ({ nome, estado, autor }) => {
  // const {nome, estado, autor} = props
  return (
    <div>
      {/* <p>parametros {props.name}</p> */}
      <p>livro {nome}</p>
      {estado === "alugado" ? (
        <p style={{ background: "#" + "DB162D" }}>alugado</p>
      ) : (
        <p style={{ background: "#" + "5ACA3C" }}>alugado</p>
      )}
      <p>parametros {autor}</p>
    </div>
  );
};

export default ShowUserName;
