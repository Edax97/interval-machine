import React, { ReactComponentElement, ReactNode } from "react";
import "./card-item.scss";

interface PropsType {
  children: ReactComponentElement<any>[] | ReactComponentElement<any>;
  className?: string;
  removeElement?: ReactNode;
}

export function CardItem(props: PropsType) {
  return (
    <div className={props.className + " card-item card p-3"}>
      {props.removeElement && (
        <div className="remove-item">{props.removeElement}</div>
      )}
      {props.children}
    </div>
  );
}
