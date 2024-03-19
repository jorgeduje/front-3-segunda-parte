import { useContext, useState } from 'react'
import ChildComponent from './ChildComponent'
import { GlobalStates, useGlobalStates } from '../Context/EjemploContext'


const ParentComponent = ({children}) => {
  // const {salario, setSalario} = useGlobalStates()
  // const {salario, setSalario} = useContext(GlobalStates) // Otra forma de llamar al context
  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
        <ChildComponent />
        {/* <p>Salario: {salario}</p> */}
        {/* {children} */}
        {console.log('Se renderizó parent')}
    </div>
  )
}

export default ParentComponent