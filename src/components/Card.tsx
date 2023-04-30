import React, { useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface ICardProps {
  width?: string;
  height?: string;
  children?: React.ReactChild | React.ReactNode;
  variant: CardVariant;
  onClick: (num: number) => void; //* FIXME: Если функция должна возвращать( так же принимать) number|string то вместо "void" указываем нужный тип.
}

const Card: React.FC<ICardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [state, setState] = useState(0);
  return (
    <>
      <div
        style={{
          width,
          height,
          border: variant === CardVariant.outlined ? "1px solid gray" : "none",
          background: variant === CardVariant.primary ? "#eee" : "",
        }}
        onClick={() => onClick(state)}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
