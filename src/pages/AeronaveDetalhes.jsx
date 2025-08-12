import React from "react";
import { useParams } from "react-router-dom";
import "../css/DetalheAeronave.css"; 

function AeronaveDetalhes() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalhes da Aeronave</h2>
      <p>Você selecionou o voo com ID: <strong>{id}</strong></p>
      {/* Aqui você pode buscar os dados da aeronave via API usando o ID */}
    </div>
  );
}

export default AeronaveDetalhes;
