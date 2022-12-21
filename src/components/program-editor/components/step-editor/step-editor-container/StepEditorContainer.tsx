import React from "react";
import { stepStyles } from "../../../../../services/step-style/step-style";
import { useAppDispatch, useAppSelector } from "../../../../../store/app/hooks";
import {
  addNotifierAction,
  addStepAction,
  removeStepAction,
  setStepNameAction,
  setStepTimeAction,
} from "../../../../../store/program/program.actions";
import { currentProgramListener } from "../../../../../store/program/program.listeners";
import { StepType } from "../../../../../types/program/step.type";
import { StepEditorComponent } from "../step-editor-component/StepEditorComponent";

export function StepEditorContainer() {
  const program = useAppSelector(currentProgramListener);
  const dispatch = useAppDispatch();

  const removeStep = (stepId: number) => {
    dispatch(removeStepAction(stepId));
  };

  //Step Administration
  const setStepName = (stepId: number, stepName: string) => {
    dispatch(setStepNameAction({ stepId, stepName }));
  };

  const onDecrement = (
    stepId: number,
    stepTime: number,
    changeValue: number
  ) => {
    if (stepTime > changeValue)
      dispatch(setStepTimeAction({ stepId, stepTime: stepTime - changeValue }));
  };
  const onIncrement = (
    stepId: number,
    stepTime: number,
    changeValue: number
  ) => {
    if (stepTime < changeValue * 60)
      dispatch(setStepTimeAction({ stepId, stepTime: stepTime + changeValue }));
  };

  return (
    <div>
      {program.stepList.map((step: StepType) => (
        <div className="pt-2" key={step.id}>
          <StepEditorComponent
            stepId={step.id}
            stepName={step.stepName}
            category={step.category}
            stepTime={step.stepTime}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onRemove={removeStep}
            onSetStepName={setStepName}
          />
        </div>
      ))}
    </div>
  );
}
