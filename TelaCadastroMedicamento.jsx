import Pagina from "../templates/Pagina";
import CadastroMedicamentos from "./formularios/CadastroMedicamento";

export default function TelaCadastroMedicamento(props) {
  return (
    <Pagina titulo="Sistema de Gestão Veterinária">
      <CadastroMedicamentos />
    </Pagina>
  );
}
