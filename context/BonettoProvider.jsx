import { useState, useEffect, createContext} from 'react'
import axios from 'axios'
 
const BonettoContext = createContext()
 
const BonettoProvider = ({children}) =>{
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState(() => {
      // Intenta cargar el pedido desde el localStorage en el lado del cliente.
      if (typeof window !== "undefined") {
        const pedidoEnLocalStorage = localStorage.getItem("pedido");
        return pedidoEnLocalStorage ? JSON.parse(pedidoEnLocalStorage) : [];
      } else {
        // Si se está ejecutando en el servidor, inicia un array vacío.
        return [];
      }
    });

    

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

    useEffect(() => {
      // Guarda el pedido en el localStorage cada vez que cambie.
      localStorage.setItem("pedido", JSON.stringify(pedido));
    }, [pedido]);    

  const handleClickCategoria = id => {
    const categoria = categorias.filter( cat => cat.id === id )
    setCategoriaActual(categoria[0])
  }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
           setPedido(pedidoActualizado)

        } else {
            setPedido([...pedido, producto])
        }

        setModal(false)
        
    }

    return( 
      <BonettoContext.Provider 
        value={{
          categorias,
          categoriaActual,
          handleClickCategoria,
          producto,
          handleSetProducto,
          modal,
          handleChangeModal,
          handleAgregarPedido,
          pedido
        }}>
        {children}
      </BonettoContext.Provider>
     ) 
 
}
export default BonettoContext
 
export{
  BonettoProvider
}
