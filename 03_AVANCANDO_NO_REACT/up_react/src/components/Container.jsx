import React from 'react'

const Container = ({children}) => {
  return (
    <div>
      <h2>Esse é nós</h2>
      {
        children
      }
    </div>
  )
}

export default Container