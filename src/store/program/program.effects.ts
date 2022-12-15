import { AppThunkType } from "../app/store";
import { newProgramAction } from "../program-list/program-list.actions";
import { setProgramAction } from "./program.actions";

export const getProgramEffect = (
  setId: number,
  programId: number
): AppThunkType<any> => {
  return (dispatch, getState) => {
    const state = getState();
    const currentSet = state.programList.setList.find(
      (set) => set.id === setId
    );
    const currentProgram = currentSet?.programList.find(
      (program) => program.id === programId
    );
    if (currentProgram) dispatch(setProgramAction(currentProgram));
  };
};

export const newProgramEffect = (setId: number): AppThunkType<any> => {
  return (dispatch, getState) => {
    const state = getState();
    const currentProgram = state.program.currentProgram;
    dispatch(newProgramAction({ setId, program: currentProgram }));
  };
};
