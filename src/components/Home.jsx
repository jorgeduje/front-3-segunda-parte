import { useState, useEffect } from "react"


export const Home = ({apellido}) => {
    const [contador, setContador] = useState(0)
    const [ transacciones, setTransacciones] = useState([])
    const [ nombre, setNombre] = useState("pepito")
    const [ persona, setPersona] = useState(null)

    
    const cambiarNombre = ()=>{
        if(nombre === "pepito"){
            setNombre("maria")
        }else{
            setNombre("pepito")
        }
    }

    // useEffect(()=>{
    //     const arrayTransacciones = [
    //         {
    //           id: 1,
    //           fecha: '2024-03-01',
    //           concepto: 'Compra de alimentos',
    //           monto: 50.25,
    //           tipo: 'Gasto'
    //         },
    //         {
    //           id: 2,
    //           fecha: '2024-03-02',
    //           concepto: 'Pago de factura de luz',
    //           monto: 80.00,
    //           tipo: 'Gasto'
    //         },
    //         {
    //           id: 3,
    //           fecha: '2024-03-03',
    //           concepto: 'Depósito de salario',
    //           monto: 1500.00,
    //           tipo: 'Ingreso'
    //         },
    //         {
    //           id: 4,
    //           fecha: '2024-03-04',
    //           concepto: 'Retiro de cajero automático',
    //           monto: 100.00,
    //           tipo: 'Gasto'
    //         },
    //         {
    //           id: 5,
    //           fecha: '2024-03-05',
    //           concepto: 'Transferencia a otro banco',
    //           monto: 200.00,
    //           tipo: 'Gasto'
    //         }
    //       ];

    //       setTransacciones(arrayTransacciones)
    // }, [])

    
    useEffect( ()=>{
        
        console.log( "hacemos la peticion" )
        setPersona( {edad: 22} )
        
    } , [ nombre ] )
    
    console.log("se hace la peticion fuera del effect")

    const sumar = ()=>{
        setContador( contador + 1 )
    }

  return (
    <div>
        <h1>Este es el home</h1>
        <button onClick={sumar}>Sumar</button>
        <button onClick={cambiarNombre}>Cambiar nombre</button>

        <h2>La edad de la persona es { persona?.edad} </h2>
    </div>
  )
}
