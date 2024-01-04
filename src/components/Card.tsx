import React from "react";
import type { ComponentProps, PropsWithChildren, ReactElement, ReactNode } from 'react';

export interface CardProps {
    children: React.ReactNode;
    rendered?: boolean;
    onClick?: () => void;
  }

export const Card: React.FC<CardProps> = ({ children, rendered = true, ...args }): ReactElement => {
  const cardStyle = {
    border: rendered ? 'none' : '2px dotted #FF42A1',
    cursor: rendered ? 'default' : 'pointer',
  };

  return (
    <div className="card" style={cardStyle} {...args}>
      <div>{children}</div>
    </div>
  );
};
  