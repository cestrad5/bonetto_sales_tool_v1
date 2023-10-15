import { useContext } from "react";
import BonettoContext from "../context/BonettoProvider";

const useBonetto = () => {
  return useContext(BonettoContext);
};

export default useBonetto;
