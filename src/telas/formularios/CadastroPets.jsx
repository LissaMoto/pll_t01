import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function CadastroPets(props) {
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
        <h3>Formulário de Cadastro de Pets</h3>
      </div>

      <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
        <Row className="mb-3">
          {/* Campo Nome */}
          <Form.Group as={Col} md="4">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome do paciente.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Data de Nascimento */}
          <Form.Group as={Col} md="4">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              required
              ide="dataNascimento"
              type="date"
              name="dataNascimento"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma data válida.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Espécie */}
          <Form.Group as={Col} md="4">
            <Form.Label>Espécie</Form.Label>
            <Form.Control
              required
              id="espécie"
              name="espécie"
              type="text"
              placeholder="Espécie"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a espécie do paciente.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Campo Raça */}
          <Form.Group as={Col} md="3">
            <Form.Label>Raça</Form.Label>
            <Form.Control
              id="raça"
              name="raça"
              type="text"
              placeholder="Raça"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a Raça do paciente.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Idade */}
          <Form.Group as={Col} md="3">
            <Form.Label>Idade</Form.Label>
            <Form.Control
              id="idade"
              name="idade"
              type="text"
              placeholder="Idade"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a Idade do paciente.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Sexo */}
          <Form.Group as={Col} md="3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select id="sexo" name="sexo" placeholder="Sexo" required>
              <option value="">Selecione o sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="none">ー</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Castração */}
          <Form.Group as={Col} md="3">
            <Form.Label>Castração</Form.Label>
            <Form.Select
              id="castração"
              name="castração"
              placeholder="Castração"
              required
            >
              <option value="">O paciente é castrado?</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
              <option value="none">ー</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Nome do tutor */}
          <Form.Group as={Col} md="5">
            <Form.Label>Nome do tutor</Form.Label>
            <Form.Control
              required
              id="nomeTutor"
              name="nomeTutor"
              type="text"
              placeholder="Nome do tutor"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome completo do tutor.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Telefone */}
          <Form.Group as={Col} md="6">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="(11) 1234-5678"
              required
              pattern="\(?\d{2}\)? ?\d{4,5}-?\d{4}"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um número de telefone válido no formato (XX)
              XXXXX-XXXX.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo CEP */}
          <Form.Group as={Col} md="3">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              id="cep"
              name="cep"
              type="text"
              placeholder="12345-678"
              required
              pattern="\d{5}-\d{3}"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um CEP válido no formato 12345-678.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo Endereço */}
          <Form.Group className="mb-3" controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              id="endereço"
              name="endereço"
              type="text"
              placeholder="Rua Oscar Freire, 250 - Apto 101"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o endereço completo.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Botões */}
        <Button variant="secondary" type="button" className="me-2">
          Voltar
        </Button>
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
