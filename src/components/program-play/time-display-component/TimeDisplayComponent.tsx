import React from "react";
import "./time-display-component.scss";

interface PropsType {
  hours: string;
  minutes: string;
}
export function TimeDisplayComponent(props: PropsType) {
  return (
    <div className="text-center display-3 time-display">
      <span>
        {props.hours}:{props.minutes}
      </span>
    </div>
  );
}
