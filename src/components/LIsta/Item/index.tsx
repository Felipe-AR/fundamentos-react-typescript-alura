import React from "react";
import { ITarefa } from "../../../types/ITarefa";
import style from "./item.module.scss";

function Item({ nome, tempo, selecionado, completado, id }: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{nome}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
