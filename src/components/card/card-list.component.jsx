import React from "react";
import CardComponent from "./card.component";

const CardListComponent = ({ children }) => {
  return <div className="card-list">{children}</div>;
};

export default CardListComponent;
