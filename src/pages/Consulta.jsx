import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import "../css/Consulta.css";

function Consulta() {
  const [ocorrencias] = useState([
    {
      id: 1,
      data: "01/08/2025",
      natureza: "PCR",
      aeronave: "PR-DHL",
      tripulantes: {
        comandante: "HSM",
        copiloto: "DAN",
        medico: "LAR",
        enfermeiro: "INA",
        top3: "",
        top2: "",
        top1: "",
      },
    },
    {
      id: 2,
      data: "15/08/2025",
      natureza: "Treinamento",
      aeronave: "PR-CBM",
      tripulantes: {
        comandante: "POR",
        copiloto: "ALA",
        medico: "",
        enfermeiro: "",
        top3: "HSJ",
        top2: "",
        top1: "",
      },
    },
    {
      id: 3,
      data: "15/12/2023",
      natureza: "Afogamento",
      aeronave: "PS-BDF",
      tripulantes: {
        comandante: "ALA",
        copiloto: "HSM",
        medico: "PSN",
        enfermeiro: "",
        top3: "HSJ",
        top2: "CMO",
        top1: "KRN",
      },
    },
  ]);

  const [filtro, setFiltro] = useState({
    data: "",
    natureza: "",
    aeronave: "",
    comandante: "",
    copiloto: "",
    medico: "",
    enfermeiro: "",
    top1: "",
    top2: "",
    top3: "",
  });

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltro((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para converter data do formato DD/MM/YYYY para YYYY-MM-DD
  const formatarData = (dataStr) => {
    const [dia, mes, ano] = dataStr.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  };

  const ocorrenciasFiltradas = ocorrencias.filter((o) => {
    const matchData = filtro.data
      ? formatarData(o.data) === filtro.data
      : true;
    const matchNatureza = filtro.natureza
      ? o.natureza.toLowerCase().includes(filtro.natureza.toLowerCase())
      : true;
    const matchAeronave = filtro.aeronave
      ? o.aeronave.toLowerCase().includes(filtro.aeronave.toLowerCase())
      : true;
    const matchComandante = filtro.comandante
      ? o.tripulantes.comandante.toLowerCase().includes(filtro.comandante.toLowerCase())
      : true;
    const matchCopiloto = filtro.copiloto
      ? o.tripulantes.copiloto.toLowerCase().includes(filtro.copiloto.toLowerCase())
      : true;
    const matchMedico = filtro.medico
      ? (o.tripulantes.medico || "").toLowerCase().includes(filtro.medico.toLowerCase())
      : true;
    const matchEnfermeiro = filtro.enfermeiro
      ? (o.tripulantes.enfermeiro || "").toLowerCase().includes(filtro.enfermeiro.toLowerCase())
      : true;
    const matchTop1 = filtro.top1
      ? (o.tripulantes.top1 || "").toLowerCase().includes(filtro.top1.toLowerCase())
      : true;
    const matchTop2 = filtro.top2
      ? (o.tripulantes.top2 || "").toLowerCase().includes(filtro.top2.toLowerCase())
      : true;
    const matchTop3 = filtro.top3
      ? (o.tripulantes.top3 || "").toLowerCase().includes(filtro.top3.toLowerCase())
      : true;

    return (
      matchData &&
      matchNatureza &&
      matchAeronave &&
      matchComandante &&
      matchCopiloto &&
      matchMedico &&
      matchEnfermeiro &&
      matchTop1 &&
      matchTop2 &&
      matchTop3
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Consulta de Ocorrências</h2>

      <Form style={{ marginBottom: 20 }}>
        <Form.Group className="mb-2" controlId="filtroData">
          <Form.Label>Data</Form.Label>
          <Form.Control
            type="date"
            name="data"
            value={filtro.data}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="filtroNatureza">
          <Form.Label>Natureza</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Natureza"
            name="natureza"
            value={filtro.natureza}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="filtroAeronave">
          <Form.Label>Aeronave</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Aeronave"
            name="aeronave"
            value={filtro.aeronave}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Comandante</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Comandante"
            name="comandante"
            value={filtro.comandante}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Copiloto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Copiloto"
            name="copiloto"
            value={filtro.copiloto}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Médico</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Médico"
            name="medico"
            value={filtro.medico}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Enfermeiro</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Enfermeiro"
            name="enfermeiro"
            value={filtro.enfermeiro}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Top 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Top 3"
            name="top3"
            value={filtro.top3}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Top 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Top 2"
            name="top2"
            value={filtro.top2}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Top 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por Top 1"
            name="top1"
            value={filtro.top1}
            onChange={handleFiltroChange}
          />
        </Form.Group>
      </Form>

      <div className="tabela-scroll-container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Data</th>
              <th>Natureza</th>
              <th>Aeronave</th>
              <th>Comandante</th>
              <th>Copiloto</th>
              <th>Médico</th>
              <th>Enfermeiro</th>
              <th>Top 3</th>
              <th>Top 2</th>
              <th>Top 1</th>
            </tr>
          </thead>
          <tbody>
            {ocorrenciasFiltradas.length > 0 ? (
              ocorrenciasFiltradas.map((o) => (
                <tr key={o.id}>
                  <td>{o.data}</td>
                  <td>{o.natureza}</td>
                  <td>{o.aeronave}</td>
                  <td>{o.tripulantes.comandante}</td>
                  <td>{o.tripulantes.copiloto}</td>
                  <td>{o.tripulantes.medico || "-"}</td>
                  <td>{o.tripulantes.enfermeiro || "-"}</td>
                  <td>{o.tripulantes.top3 || "-"}</td>
                  <td>{o.tripulantes.top2 || "-"}</td>
                  <td>{o.tripulantes.top1 || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>
                  Nenhuma ocorrência encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Consulta;
