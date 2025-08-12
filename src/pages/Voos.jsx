import React from "react";
import CardVoo from "../components/CardVoo";


const voosDoDia = [
  { data: "01/08/2025", local: "SBBR", aeronave: "PS-BDF", hora: "08:00" },
  { data: "01/08/2025", local: "BR-040", aeronave: "PR-DHL", hora: "10:30" },
  { data: "01/08/2025", local: "HMIB", aeronave: "PS-BDF", hora: "16:15" },
];

function Voos() {
  return (
    <div>
      <h2>Voos do Dia</h2>
      <div className="d-flex flex-wrap gap-3">
        {voosDoDia.map((voo) => (
          <CardVoo key={voo.id} voo={voo} />
        ))}
      </div>
    </div>
  );
}

export default Voos;