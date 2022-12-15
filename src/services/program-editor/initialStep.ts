import { StepType } from "../../types/program/step.type";

export const initialStep: StepType = {
  id: 0,
  stepName: "",
  stepTime: 60,
  category: "normal",
};

export const initialNotifier: StepType = {
  id: 0,
  stepName: "",
  stepTime: 10,
  category: "notify",
};
