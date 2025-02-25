import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function CadastroMedicamentos(props) {
  const [validado, setValidado] = useState(false);

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity() === false) {
      evento.preventDefault();
      evento.stopPropagation();
    }
    setValidado(true);
  }

  return (
    <>
      <div className="border text-center">
        <h3>Formulário de Cadastro de Medicamentos</h3>
      </div>

      <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
        <Row className="mb-3">
          {/* Campo Nome do Medicamento */}
          <Form.Group as={Col} md="6">
            <Form.Label>Nome do Medicamento</Form.Label>
            <Form.Control
              required
              id="nomeMedicamento"
              name="nomeMedicamento"
              type="text"
              placeholder="Digite o nome do medicamento"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome do medicamento.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Tipo do Medicamento */}
          <Form.Group as={Col} md="6">
            <Form.Label>Tipo do Medicamento</Form.Label>
            <Form.Control
              required
              id="tipoMedicamento"
              name="tipoMedicamento"
              type="text"
              placeholder="Ex: Comprimido, Injeção, etc."
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o tipo do medicamento.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Campo Data de Validade */}
          <Form.Group as={Col} md="6">
            <Form.Label>Data de Validade</Form.Label>
            <Form.Control
              required
              id="dataValidade"
              name="dataValidade"
              type="date"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma data de validade válida.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Quantidade em Estoque */}
          <Form.Group as={Col} md="6">
            <Form.Label>Quantidade em Estoque</Form.Label>
            <Form.Control
              required
              id="quantidadeEstoque"
              name="quantidadeEstoque"
              type="number"
              placeholder="Digite a quantidade disponível"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a quantidade em estoque.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Campo Fabricante */}
          <Form.Group as={Col} md="6">
            <Form.Label>Fabricante</Form.Label>
            <Form.Control
              required
              id="fabricante"
              name="fabricante"
              type="text"
              placeholder="Digite o nome do fabricante"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome do fabricante.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Observações */}
          <Form.Group as={Col} md="6">
            <Form.Label>Observações</Form.Label>
            <Form.Control
              as="textarea"
              id="observacoes"
              name="observacoes"
              placeholder="Insira observações adicionais (opcional)"
              rows={3}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" className="me-2">
          Cadastrar
        </Button>
        <Button variant="danger" type="reset">
          Limpar
        </Button>
      </Form>
    </>
  );
}
