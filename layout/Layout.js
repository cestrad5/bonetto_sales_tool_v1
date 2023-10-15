import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import ModalProducto from "../components/ModalProducto";
import useBonetto from "../hooks/ useBonetto";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, pagina }) {
  const { modal } = useBonetto();
  const { openSidebar } = useBonetto(); // Agregar esto para controlar la apertura/cierre del sidebar

  return (
    <>
      <Head>
        <title>{pagina} - Bonetto</title>
        <link rel="icon" type="image/svg+xml" href="../bonetto.svg" />
        <meta name="description" content="Catalogo Bonetto" />
      </Head>

      <div className="flex">
        <aside
          className={`md:w-5/10 xl:w-1/8 2xl:w-1/10 ${
            openSidebar ? "" : "hidden md:block"
          }`} // Agregar clase hidden si el sidebar está cerrado en pantallas medianas y grandes
        >
          <Sidebar />
        </aside>

        <main className="md:w-5/10 xl:w-7/8 2xl:w-9/ h-screen overflow-y-scroll">
          <div className="text-center">{children}</div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
    </>
  );
}
