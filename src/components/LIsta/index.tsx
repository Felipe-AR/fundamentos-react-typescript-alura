import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <Item key={tarefa.id} selecionaTarefa={selecionaTarefa} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
