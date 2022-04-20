import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./lista.module.scss";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
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
