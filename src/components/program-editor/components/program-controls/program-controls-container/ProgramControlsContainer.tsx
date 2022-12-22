import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/app/hooks";
import {
  setProgramNameAction,
  setLoopsAction,
} from "../../../../../store/program/program.actions";
import { currentProgramListener } from "../../../../../store/program/program.listeners";
import { ProgramControlsComponent } from "../program-controls-component/ProgramControlsComponent";

export function ProgramControlsContainer() {
  const dispatch = useAppDispatch();

  const program = useAppSelector(currentProgramListener);
  //const {programName, loops, setId} = program;
  const setProgramName = (programName: string) => {
    dispatch(setProgramNameAction(programName));
  };
  const setLoops = (loops: number) => {
    dispatch(setLoopsAction(loops));
  };
  return (
    <ProgramControlsComponent
      programName={program.programName}
      loops={program.loops}
      setProgramName={setProgramName}
      setLoops={setLoops}
    />
  );
}
