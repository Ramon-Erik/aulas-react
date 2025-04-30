import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Criando componentes</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
    </>
  )
}

export default App
