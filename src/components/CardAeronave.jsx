import React from "react";
import { Card } from "react-bootstrap";


function CardAeronave({ aeronave }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{aeronave.modelo}</Card.Title>
        <Card.Text>Matrícula: {aeronave.matricula}</Card.Text>
        <button className="btn btn-primary">Ver Detalhes</button>
      </Card.Body>
    </Card>
  );
}

export default CardAeronave;