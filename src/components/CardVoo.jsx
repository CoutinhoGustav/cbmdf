import React from "react";
import { Card } from "react-bootstrap";
import "../css/CardVoo.css";

function CardVoo({ voo }) {
  return (
    <Card className="card-voo">
      <Card.Body>
        <Card.Title>Data: {voo.data}</Card.Title>
        <Card.Text>Local: {voo.local}</Card.Text>
        <Card.Text>Aeronave: {voo.aeronave}</Card.Text>
        <Card.Text>Hora: {voo.hora}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardVoo;
