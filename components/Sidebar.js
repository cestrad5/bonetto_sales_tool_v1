import Image from "next/image"
import useBonetto from "../hooks/ useBonetto";
import Categoria from "./Categoria";


const Sidebar = () => {

  const { categorias } = useBonetto();


  return (
    <>
      <Image 
        width={300}
        height={100}
        alt="Logo"
        src="/assets/img/logo.svg"
      />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>

    </>

    
  )
}

export default Sidebar
