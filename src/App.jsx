import LoginForm from "./Components/LoginForm"

function App() {
  const handleClick =() => {
    //Todo el envio del form
  }
  return (
   <h1>
      <LoginForm handleClick={handleClick}/>
   </h1>
  )
}

export default App
