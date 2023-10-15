import { useState, useEffect, createContext} from 'react'
import axios from 'axios'
 
const BonettoContext = createContext()
 
const BonettoProvider = ({children}) =>{
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    const obtenerCategorias = async () => {
      const { data } = await axios('/api/categorias')
      setCategorias(data)
    }
    useEffect(() => {
      obtenerCategorias()
    }, [])
 
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

  const handleClickCategoria = id => {
    const categoria = categorias.filter( cat => cat.id === id )
    setCategoriaActual(categoria[0])
  }
 
    return( 
      <BonettoContext.Provider 
        value={{
          categorias,
          categoriaActual,
          handleClickCategoria,
        }}>
        {children}
      </BonettoContext.Provider>
     ) 
 
}
export default BonettoContext
 
export{
  BonettoProvider
}
