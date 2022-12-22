import React from "react";
import { useAppDispatch } from "../../../../../store/app/hooks";
import {
  addStepAction,
  addNotifierAction,
} from "../../../../../store/program/program.actions";
import { StepControlsComponent } from "../step-controls-component/StepControlsComponent";

export function StepControlsContainer() {
  const dispatch = useAppDispatch();

  const addStep = () => {
    dispatch(addStepAction());
  };
  const addNotifier = () => {
    dispatch(addNotifierAction());
  };
  return <StepControlsComponent addStep={addStep} addNotifier={addNotifier} />;
}
