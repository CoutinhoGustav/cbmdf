import React from "react";
import "../css/Home.css";

function Home() {
  const noticias = [
    {
      id: 1,
      titulo: "Treinamento de Resgate",
      descricao: "Novo treinamento de resgate será realizado no dia 15/08 no hangar central.",
      data: "05/07/2025",
    },
    {
      id: 2,
      titulo: "Manutenção de Equipamentos",
      descricao: "Todos os equipamentos deverão passar por inspeção técnica até 10/08.",
      data: "04/08/2025",
    },
    {
      id: 3,
      titulo: "Campanha de Vacinação",
      descricao: "Vacinação contra gripe disponível no ambulatório da base aérea até 20/08.",
      data: "03/08/2025",
    },
  ];

  return (
    <div className="inicio-container">
      
      <main className="inicio-main">
        <section className="noticias-section">
          <h2>Novidades e Avisos</h2>
          <div className="noticias-cards">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="noticia-card">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descricao}</p>
                <span className="data-noticia">{noticia.data}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
