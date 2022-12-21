import {
  loadState,
  saveState,
} from "../../services/local-storage/local-storage-service";
import { getInitialProgramList } from "../../services/program-list/program-list-service";
import { AppThunkType } from "../app/store";
import { setCurrentSetAction, setSetListAction } from "./program-list.actions";

export const getProgramListEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    //try from local storage, otherwise from hardcoded state
    let programListState = loadState("programList");
    if (!programListState) programListState = getInitialProgramList();
    const { setList, currentSetId } = programListState;

    dispatch(setSetListAction(setList));
    dispatch(setCurrentSetAction(currentSetId || 0));
  };
};

export const saveProgramListEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    //save state in local storage
    const programList = getState().programList;
    if (programList.currentSetId !== null)
      saveState("programList", programList);
  };
};
