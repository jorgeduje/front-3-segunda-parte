import { useGlobalStates } from "../Context/EjemploContext"

const ChildComponent = () => {

  const {salario, setSalario} = useGlobalStates()
  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6} </h3>
        <button onClick={() => setSalario(salario +100000)}>Pedir aumento</button>
        {console.log('Se renderizó hijo')}
    </div>
  )
}

export default ChildComponent
