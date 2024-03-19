import { useGlobalStates } from '../Context/EjemploContext'
import lobo from './lobo.png'

const LoboEstepario = () => {
  const {salario} = useGlobalStates()
  return (
    <div className='lobo-estepario'>
        <img width={200} className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        {console.log('Se renderizó lobo')}
    </div>
  )
} 

export default LoboEstepario