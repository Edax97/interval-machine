import { getInitialProgramList } from "../../services/program-list/program-list-service";
import { AppThunkType } from "../app/store";
import { setCurrentSetAction, setSetListAction } from "./program-list.actions";

export const getSetListEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    const { setList, currentSetId } = getInitialProgramList();
    dispatch(setSetListAction(setList));
    dispatch(setCurrentSetAction(currentSetId as number));
  };
};
