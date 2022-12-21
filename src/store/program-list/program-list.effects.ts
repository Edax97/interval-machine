import {
  loadState,
  saveState,
} from "../../services/local-storage/local-storage-service";
import { getProgramsService } from "../../services/program-list/program-list-service";
import { ProgramListState } from "../../types/program-list/program-list-state.type";
import { AppThunkType } from "../app/store";
import { setCurrentSetAction, setSetListAction } from "./program-list.actions";

export const getProgramListEffect = (): AppThunkType<any> => {
  return async (dispatch, getState) => {
    //try from local storage, otherwise from data service
    let programListState = loadState<ProgramListState>("programList");
    if (!programListState) programListState = await getProgramsService();
    if (!programListState) return;

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
