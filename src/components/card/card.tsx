import { FunctionComponent } from "react";

import { Monster } from "../../utils/shared";

import "./card.css";

type CardProps = {
  monster: Monster;
};

export const Card: FunctionComponent<CardProps> = ({ monster }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
