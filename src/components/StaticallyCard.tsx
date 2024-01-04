import React, { memo } from "react";
import type { ReactElement } from 'react';
import { Card } from "./Card";

const StaticallyCard = (): ReactElement => {
  return (
    <Card>
      Statically imported <code>Card 1</code> rendered at:{" "}
      {new Date(Date.now()).toLocaleTimeString()}
    </Card>
  );
};

export default memo(StaticallyCard);
