import React from "react";
import Item from "./Item";
import style from "./lista.module.scss";

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
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <Item key={indice} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
