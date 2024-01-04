import React, { Suspense, useState } from "react";
import type {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
} from "react";
import { Card } from "./Card";

type Props = {
  component: () => JSX.Element;
  name: string;
};
const DynamicCard = ({ component, name }: Props) => {
  const [open, setOpen] = React.useState(false);
  const Component = component;
  

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Suspense fallback={<p id="loading">Loading...</p>}>
      {open ? (
        <Component />
      ) : (
        <Card rendered={false} onClick={handleClick}>
          <p>
            Click here to dynamically import <code>{name}</code> component
          </p>
        </Card>
      )}
    </Suspense>
  );
};

export default DynamicCard;
