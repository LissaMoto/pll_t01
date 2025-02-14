import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Inicio(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Início</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pacientes</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Veterinários/Técnicos
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                Medicamentos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
