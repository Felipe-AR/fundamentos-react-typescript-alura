import React from "react";
import "./style.scss";

function Lista() {
  const tarefas = [
    {
      nome: "React",
      tempo: "02:00:00",
    },
    {
      nome: "JavaScript",
      tempo: "01:00:00",
    },
    {
      nome: "TypeScript",
      tempo: "03:00:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice} className="item">
            <h3>{tarefa.nome}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
