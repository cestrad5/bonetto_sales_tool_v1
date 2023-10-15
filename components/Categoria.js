import Image from "next/image";
import useBonetto from "../hooks/ useBonetto";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useBonetto();
  const { nombre, icono, id } = categoria;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        <Image
          width={70}
          height={70}
          src={`/assets/img/icon_${icono}.svg`}
          className="mr-5"
          alt="icon"
        />
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
