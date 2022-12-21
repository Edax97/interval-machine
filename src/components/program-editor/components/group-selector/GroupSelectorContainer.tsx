/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/app/hooks";
import {
  currentSetIdListener,
  setListListener,
} from "../../../../store/program-list/program-list.listeners";
import {
  resetProgramAction,
  setSetIdAction,
} from "../../../../store/program/program.actions";
import { currentProgramListener } from "../../../../store/program/program.listeners";
import { SetSelectorComponent } from "../../../program-list/set-selector/set-selector-component/SetSelectorComponent";

export function GroupSelectorContainer() {
  const dispatch = useAppDispatch();

  const initialSetId = useAppSelector(currentSetIdListener);
  const program = useAppSelector(currentProgramListener);

  const setList = useAppSelector(setListListener);
  useEffect(() => {
    dispatch(resetProgramAction());
    if (initialSetId !== null) dispatch(setSetIdAction(initialSetId));
  }, []);
  const selectSet = (setId: number) => {
    dispatch(setSetIdAction(setId));
  };
  return (
    <SetSelectorComponent
      currentSetId={program.setId}
      setList={setList}
      selectSet={selectSet}
      hideDelete
    />
  );
}
