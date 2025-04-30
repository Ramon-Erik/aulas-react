const Desafio04 = ({info}) => {
  return (
    <div>
      <span>nome: {info.nome} </span>
      <span>tem {info.idade} </span>
      {info.idade >= 18 ? (<span>Pode tirar carteira</span>) : (<span>Não pode tirar carteira</span>)}
    </div>
  )
}

export default Desafio04