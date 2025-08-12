import React from "react";
import CardAeronave from "../components/CardAeronave";
import "../css/Aeronaves.css";

const aeronaves = [
  { id: 1, modelo: "PR-DHL (RESGATE 04)", matricula: "EC130B4" },
  { id: 2, modelo: "PR-CBM (RESGATE 03)", matricula: "EC135T2" },
  { id: 3, modelo: "PS-BDF (RESGATE 08)", matricula: "H125"  },
];

function Aeronaves() {
  return (
    <div>
      <h2>Aeronaves</h2>
      <div className="d-flex flex-wrap gap-3">
        {aeronaves.map((aero) => (
          <CardAeronave key={aero.id} aeronave={aero} />
        ))}
      </div>
    </div>
  );
}

export default Aeronaves;