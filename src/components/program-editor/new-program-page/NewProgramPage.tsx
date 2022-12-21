/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/app/hooks";
import { setCurrentSetAction } from "../../../store/program-list/program-list.actions";
import { newProgramEffect } from "../../../store/program/program.effects";
import { useCurrentProgram } from "../hooks/use-current-program";
import { ProgramEditorComponent } from "../program-editor-component/ProgramEditorComponent";
import { StepControlsContainer } from "../components/step-controls/step-controls-container/StepControlsContainer";
import { StepEditorContainer } from "../components/step-editor/step-editor-container/StepEditorContainer";
import { GroupSelectorContainer } from "../components/group-selector/GroupSelectorContainer";

export function NewProgramPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Program Editor
  const { program, setProgramName, setLoops } = useCurrentProgram();
  const saveProgram = () => {
    dispatch(newProgramEffect(program.setId));
    //Ir al grupo donde se creo el programa
    dispatch(setCurrentSetAction(program.setId));
    navigate("/programs");
  };

  return (
    <div className="pt-1">
      <GroupSelectorContainer />
      <div className="pt-3">
        <ProgramEditorComponent
          programName={program.programName}
          loops={program.loops}
          setProgramName={setProgramName}
          setLoops={setLoops}
          saveProgram={saveProgram}
          cancelChanges={() => navigate("/programs")}
        />
      </div>
      <div className="mt-2">
        <StepEditorContainer />
      </div>
      <StepControlsContainer />
    </div>
  );
}
