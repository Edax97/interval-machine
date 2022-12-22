/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";
import { setCurrentSetAction } from "../../../store/program-list/program-list.actions";
import { newProgramEffect } from "../../../store/program/program.effects";
import { StepControlsContainer } from "../components/step-controls/step-controls-container/StepControlsContainer";
import { StepEditorContainer } from "../components/step-editor/step-editor-container/StepEditorContainer";
import { GroupSelectorContainer } from "../components/group-selector/GroupSelectorContainer";
import { currentProgramListener } from "../../../store/program/program.listeners";
import { ProgramControlsContainer } from "../components/program-controls/program-controls-container/ProgramControlsContainer";

export function NewProgramPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const program = useAppSelector(currentProgramListener);
  const saveProgram = () => {
    dispatch(newProgramEffect(program.setId));
    //Ir al grupo donde se creo el programa
    dispatch(setCurrentSetAction(program.setId));
    navigate("/programs");
  };

  return (
    <div className="pt-1">
      <GroupSelectorContainer />
      <form
        className="pt-2"
        onSubmit={(ev) => {
          ev.preventDefault();
          saveProgram();
        }}
      >
        <ProgramControlsContainer />
        <div className="mt-2">
          <StepEditorContainer />
        </div>
      </form>

      <StepControlsContainer />
    </div>
  );
}
