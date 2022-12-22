import React from "react";
import { stepStyles } from "../../../../../services/step-style/step-style";

interface PropsType {
  addStep: () => void;
  addNotifier: () => void;
}
export function StepControlsComponent(props: PropsType) {
  return (
    <div className="list-actions d-flex justify-content-center pt-4 pb-3">
      <button
        className="me-3 btn text-white"
        type="button"
        style={{ backgroundColor: stepStyles.normal }}
        onClick={props.addStep}
      >
        ADD STEP
      </button>
      <button
        className="btn text-white"
        type="button"
        style={{ backgroundColor: stepStyles.notify }}
        onClick={props.addNotifier}
      >
        ADD NOTIFIER
      </button>
    </div>
  );
}
