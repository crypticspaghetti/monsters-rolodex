import { FunctionComponent } from "react";

import { Monster } from "../../utils/shared";
import { Card } from "../card";

import "./card-list.css";

type CardListProps = {
  monsters: Monster[];
};

export const CardList: FunctionComponent<CardListProps> = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
