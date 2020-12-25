import { FunctionComponent } from "react";

import "./card-list.css";

export const CardList: FunctionComponent = ({ children }) => (
  <div className="card-list">{children}</div>
);
