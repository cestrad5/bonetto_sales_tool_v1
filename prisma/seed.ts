import { categorias } from "./data/categorias";
import { productos } from "./data/productos";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    for (const categoria of categorias) {
      // Verificar si la categoría ya existe en la base de datos
      const existingCategoria = await prisma.categoria.findFirst({
        where: { nombre: categoria.nombre },
      });

      // Si no existe, crear la categoría
      if (!existingCategoria) {
        await prisma.categoria.create({
          data: categoria,
        });
      }
    }

    for (const producto of productos) {
      // Verificar si el producto ya existe en la base de datos
      const existingProducto = await prisma.producto.findFirst({
        where: { referencia: producto.referencia },
      });

      // Si no existe, crear el producto
      if (!existingProducto) {
        await prisma.producto.create({
          data: producto,
        });
      }
    }

    console.log("Siembra completada con éxito.");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error de siembra:", error.message);
    } else {
      console.error("Error de siembra:", error);
    }
  } finally {
    await prisma.$disconnect(); // Desconectar el cliente Prisma cuando haya terminado.
  }
};

main();
