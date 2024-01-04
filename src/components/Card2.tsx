import React from "react";
import { Card } from "./Card";

const Card2 = () => {
  return (
    <Card>
      Dynamically imported <code>Card2</code> rendered at:{" "}
      {new Date(Date.now()).toLocaleTimeString()}
    </Card>
  );
};

export default Card2;
