import React, { useState } from 'react'

const Condition = () => {
  const [x] = useState(true)
  const [name] = useState("João")
  return (
    <div>
      {x && <p>Oi, eu sou a Verdade</p>}
      {!x && <p>Oi, eu não apareço</p>}
      {name === "João" ? (
        <p>Oi joão</p>
      ) : (
        <p>Oi {name}!!!</p>
      )}
    </div>
  )
}

export default Condition