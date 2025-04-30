const Events = () => {
  const handleMyEvent = (e) => {
    alert('ativado')
  }
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button><br />
        <br /><button onClick={(e) => alert('1')}>Clique aqui inline</button><br /><br />
        
      </div>
    </div>
  )
}

export default Events