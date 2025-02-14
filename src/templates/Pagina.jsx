import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Inicio from "./Inicio";

export default function Pagina(props) {
  return (
    <Container>
      <Cabecalho titulo={props.titulo} />
      <Inicio />
      <Container className="p-5 border">{props.children}</Container>
    </Container>
  );
}
