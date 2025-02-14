import Pagina from "../templates/Pagina";
import CadastroPets from "./formularios/CadastroPets";

export default function TelaCadastroPets(props) {
  return (
    <Pagina titulo="Sistema de Gestão Veterinária">
      <CadastroPets />
    </Pagina>
  );
}
