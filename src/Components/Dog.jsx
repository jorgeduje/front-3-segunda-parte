import { useEffect } from "react"
import { useState } from "react"

const Dog = () => {
    const [dog, setDog] = useState()
    const [loading, setLoading] = useState(true)
    const [toggle, setToggle] = useState(true)
    const url = 'https://dog.ceo/api/breeds/image/random'
    console.log('Primero esto')

    // Fetch con then
    useEffect( () => {
        console.log('Por último esto')
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setDog(data)
        })
    }, [toggle])

    //Fetch con async/await
    // useEffect(() => {
    //     async function fetchImagen() {
    //       const response = await fetch(url);
    //       const data = await response.json();
    //       setDog(data);
    //       setLoading(false);
    //     }
    //     fetchImagen();
    // }, []);

    // console.log(dog)
  return (
    <div>
        {console.log('Despues esto')}
        <button onClick={() => setToggle(!toggle)}>Cambiar perrito</button>
        {loading ?  
                'Cargando...' : 
                <img src={dog.message} alt="" width='300'/>
        }
       {/* <img src={dog?.message} alt="" width='300'/> */}
    </div>
  )
}

export default Dog