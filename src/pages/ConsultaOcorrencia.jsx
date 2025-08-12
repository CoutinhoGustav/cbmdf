import React, { useState } from "react";
import { Form, Button, Table, Row, Col } from "react-bootstrap";

const dadosOcorrenciasFake = [
  {
    id: 1,
    data: "2025-08-01",
    aeronave: "Arcanjo 01",
    ocorrencia: "Pane elétrica",
    tripulantes: "Comandante Silva, Copiloto Braga",
    local: "Base Central"
  },
  {
    id: 2,
    data: "2025-08-02",
    aeronave: "Arcanjo 02",
    ocorrencia: "Falha hidráulica",
    tripulantes: "Comandante Lara, Médico Júlio",
    local: "Rodovia BR-020"
  }
  // Adicione mais dados mock se quiser testar
];

function ConsultaOcorrencia() {
  const [filtros, setFiltros] = useState({
    data: "",
    aeronave: "",
    ocorrencia: "",
    tripulantes: "",
    local: ""
  });

  const [resultados, setResultados] = useState(dadosOcorrenciasFake);

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const filtrarOcorrencias = () => {
    const filtrado = dadosOcorrenciasFake.filter((oc) => {
      return (
        (!filtros.data || oc.data.includes(filtros.data)) &&
        (!filtros.aeronave || oc.aeronave.toLowerCase().includes(filtros.aeronave.toLowerCase())) &&
        (!filtros.ocorrencia || oc.ocorrencia.toLowerCase().includes(filtros.ocorrencia.toLowerCase())) &&
        (!filtros.tripulantes || oc.tripulantes.toLowerCase().includes(filtros.tripulantes.toLowerCase())) &&
        (!filtros.local || oc.local.toLowerCase().includes(filtros.local.toLowerCase()))
      );
    });

    setResultados(filtrado);
  };

  return (
    <div>
      <h2>Consulta de Ocorrências</h2>
      <Form className="mb-4">
        <Row className="mb-2">
          <Col md={4}>
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              name="data"
              value={filtros.data}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Label>Aeronave</Form.Label>
            <Form.Control
              type="text"
              name="aeronave"
              placeholder="Ex: Arcanjo 01"
              value={filtros.aeronave}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Label>Ocorrência</Form.Label>
            <Form.Control
              type="text"
              name="ocorrencia"
              placeholder="Ex: Pane elétrica"
              value={filtros.ocorrencia}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Label>Tripulante</Form.Label>
            <Form.Control
              type="text"
              name="tripulantes"
              placeholder="Ex: Comandante Silva"
              value={filtros.tripulantes}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <Form.Label>Local</Form.Label>
            <Form.Control
              type="text"
              name="local"
              placeholder="Ex: Base Central"
              value={filtros.local}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Button variant="primary" onClick={filtrarOcorrencias}>
          Buscar
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Aeronave</th>
            <th>Ocorrência</th>
            <th>Tripulantes</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {resultados.length > 0 ? (
            resultados.map((oc) => (
              <tr key={oc.id}>
                <td>{oc.data}</td>
                <td>{oc.aeronave}</td>
                <td>{oc.ocorrencia}</td>
                <td>{oc.tripulantes}</td>
                <td>{oc.local}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Nenhuma ocorrência encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ConsultaOcorrencia;

