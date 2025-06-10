import React from "react";

// import styles from './Register.module.css'

const Register = () => {
  return (
    <>
      <h1>Criar uma nova conta</h1>
      <form>
        <label>
          <span className="label">Nome</span>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome de usuário"
            required
          />
        </label>
        <label>
          <span className="label">Email</span>
          <input type="email" name="email" id="email" placeholder="example@gmail.com" required />
        </label>
        <label>
          <span className="label">Senha</span>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Uma senha forte"
            required
          />
        </label>
        <label>
          <span className="label">Confirmar senha</span>
          <input
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            placeholder="Confirme sua senha"
            required
          />
        </label>
        <button className="btn btnSend">Enviar</button>
      </form>
    </>
  );
};

export default Register;
