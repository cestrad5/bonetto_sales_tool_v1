export const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  });
};
