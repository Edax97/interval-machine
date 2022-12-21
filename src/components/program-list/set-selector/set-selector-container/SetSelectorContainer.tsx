import { useAppDispatch, useAppSelector } from "../../../../store/app/hooks";
import {
  editSetNameAction,
  newSetAction,
  removeSetAction,
  setCurrentSetAction,
} from "../../../../store/program-list/program-list.actions";
import {
  currentSetIdListener,
  setListListener,
} from "../../../../store/program-list/program-list.listeners";
import { SetSelectorComponent } from "../set-selector-component/SetSelectorComponent";

export function SetSelectorContainer() {
  const dispatch = useAppDispatch();
  const currentSetId = useAppSelector(currentSetIdListener);
  const setList = useAppSelector(setListListener);

  const selectSet = (setId: number) => {
    dispatch(setCurrentSetAction(setId));
  };

  const deleteSet = (setId: number) => {
    dispatch(removeSetAction(setId));
  };

  const createSet = (setName: string) => {
    dispatch(newSetAction(setName));
  };

  const editSetName = (setId: number, setName: string) => {
    dispatch(editSetNameAction({ setId, setName }));
  };

  if (currentSetId === null) return null;
  return (
    <div>
      <SetSelectorComponent
        currentSetId={currentSetId}
        setList={setList}
        selectSet={selectSet}
        onDelete={() => deleteSet(currentSetId)}
        onCreate={() => createSet("")}
        onEdit={() => editSetName(0, "")}
      />
    </div>
  );
}
