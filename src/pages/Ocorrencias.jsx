import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../css/Ocorrencias.css";

function Ocorrencias() {
  const [show, setShow] = useState(false);
  const [showConfirmacao, setShowConfirmacao] = useState(false);
  const [data, setData] = useState("");
  const [natureza, setNatureza] = useState("");
  const [tripulantes, setTripulantes] = useState({
    comandante: "",
    copiloto: "",
    medico: "",
    enfermeiro: "",
    Top3: "",
    Top2: "",
    Top1: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTripulanteChange = (e) => {
    const { name, value } = e.target;
    setTripulantes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalvar = () => {
    setShowConfirmacao(true); // Exibe o modal de confirmação
  };

  const confirmarSalvar = () => {
    console.log({
      data,
      natureza,
      tripulantes,
    });
    setShowConfirmacao(false);
    setShow(false);
  };

  const cancelarSalvar = () => {
    setShowConfirmacao(false);
  };

  return (
    <div className="oc-page">
      <h2 className="oc-heading">Ocorrências</h2>
      <div className="oc-btn-container">
        <Button variant="primary" onClick={handleShow}>
          Nova Ocorrência
        </Button>
      </div>

      <div className="oc-modal-wrapper">
        <Modal show={show} onHide={handleClose}>
          <div className="oc-modal-content">
            <Modal.Header closeButton>
              <Modal.Title className="oc-modal-title">
                Nova Ocorrência
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="oc-form-wrapper">
                <Form>
                  <div className="oc-form-section">
                    <Form.Group className="mb-3">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Natureza</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ex: Pane elétrica"
                        value={natureza}
                        onChange={(e) => setNatureza(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  <div className="oc-form-section">
                    <Form.Label>Tripulação</Form.Label>

                    {[
                      "comandante",
                      "copiloto",
                      "medico",
                      "enfermeiro",
                      "Top3",
                      "Top2",
                      "Top1",
                    ].map((role) => (
                      <Form.Group className="mb-3" key={role}>
                        <Form.Label>{role.charAt(0).toUpperCase() + role.slice(1)}</Form.Label>
                        <Form.Control
                          type="text"
                          name={role}
                          placeholder={`Nome do ${role}`}
                          value={tripulantes[role] || ""}
                          onChange={handleTripulanteChange}
                        />
                      </Form.Group>
                    ))}
                  </div>
                </Form>
              </div>
            </Modal.Body>

            <Modal.Footer className="oc-modal-footer">
              <Button variant="primary" onClick={handleSalvar}>
                Salvar
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>

      {/* Modal de Confirmação */}
      <Modal show={showConfirmacao} onHide={cancelarSalvar} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Salvamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente salvar esta ocorrência?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={confirmarSalvar}>
            Salvar
          </Button>
          <Button variant="secondary" onClick={cancelarSalvar}>
            Não
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Ocorrencias;
