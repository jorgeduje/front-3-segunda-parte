import { useState } from "react"
import { Home } from "./components/Home"

function App() {

  const [ apellido , setApellido] = useState("lopez")

  return (
    <>
      <Home apellido={apellido} />
      <button onClick={()=>setApellido("gonzalez")}>Cambiar apellido</button>
    </>
  )
}

export default App
