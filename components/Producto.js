import Image from "next/image";
import useBonetto from "../hooks/ useBonetto";
import { formatearDinero } from "../helpers";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useBonetto();
  const { referencia, nombre, imagen, precio } = producto;

  return (
    <div className="border p-3">
      <Image
        priority
        src={`/assets/img/${imagen}`}
        alt={`Img producto ${nombre}`}
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <h2 className="bg-yellow-100">REF: {referencia}</h2>
        <h2 className="bg-yellow-100">{formatearDinero(precio)}</h2>

        <p className="mt-5 font-black text-4xl text-amber-500"></p>

        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-5 p-3 uppercase font-bold rounded-md"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
