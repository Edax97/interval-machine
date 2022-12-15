import { createContext, useMemo, useState } from "react";
import { ProgramEditorType } from "../../types/program/program-editor.type";
import { ProgramType } from "../../types/program/program.type";
import { StepType } from "../../types/program/step.type";

const newNormalStep: StepType = {
  id: 0,
  stepName: "New Step",
  stepTime: 60,
  category: "normal",
};

const newNotifyStep: StepType = {
  id: 0,
  stepName: "New Notifier",
  stepTime: 10,
  category: "notify",
};

export const programEditorContext = createContext<null | ProgramEditorType>(
  null
);

export function useStepList() {
  const [stepList, setStepList] = useState<StepType[]>([{ ...newNormalStep }]);
  const lastId = useMemo(
    () => stepList[stepList.length - 1].id || 1,
    [stepList]
  );

  const addStep = (category: "normal" | "notify") => {
    const newStep = category === "normal" ? newNormalStep : newNotifyStep;
    setStepList([...stepList, { ...newStep, id: lastId + 1 }]);
  };

  const removeStep = (id: number) => {
    const newStepList = stepList.filter((step) => step.id !== id);
    setStepList(newStepList);
  };

  const setStepName = (id: number, stepName: string) => {
    const newStepList = stepList.map((step) =>
      step.id === id ? { ...step, stepName } : step
    );
    setStepList(newStepList);
  };

  const setStepTime = (id: number, stepTime: number) => {
    const newStepList = stepList.map((step) =>
      step.id === id ? { ...step, stepTime } : step
    );
    setStepList(newStepList);
  };

  return {
    stepList,
    setStepList,
    addStep,
    removeStep,
    setStepName,
    setStepTime,
  };
}

export function ProgramEditorProvider(props: any) {
  const [programName, setProgramName] = useState("");
  const [loops, setLoops] = useState(1);
  const [programId, setProgramId] = useState<number | null>(null);

  const {
    stepList,
    setStepList,
    addStep,
    removeStep,
    setStepName,
    setStepTime,
  } = useStepList();

  const loadProgram = (program: ProgramType) => {
    setProgramName(program.programName);
    setStepList(program.stepList);
    setLoops(program.loops);
    setProgramId(program.id);
  };

  const value = {
    state: {
      programName,
      loops,
      programId,
      stepList,
    },
    actions: {
      setProgramName,
      setLoops,
      addStep,
      removeStep,
      setStepName,
      setStepTime,
      loadProgram,
    },
  };

  return (
    <programEditorContext.Provider value={value}>
      {props.children}
    </programEditorContext.Provider>
  );
}
