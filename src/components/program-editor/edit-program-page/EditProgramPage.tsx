import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";

import { setListListener } from "../../../store/program-list/program-list.listeners";
import {
  getProgramEffect,
  saveProgramEffect,
} from "../../../store/program/program.effects";
import { currentProgramListener } from "../../../store/program/program.listeners";
import { ProgramControlsContainer } from "../components/program-controls/program-controls-container/ProgramControlsContainer";
import { StepControlsContainer } from "../components/step-controls/step-controls-container/StepControlsContainer";
import { StepEditorContainer } from "../components/step-editor/step-editor-container/StepEditorContainer";

export function EditProgramPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const program = useAppSelector(currentProgramListener);
  useEffect(() => {
    const { setId, programId } = params;
    if (setId && programId) dispatch(getProgramEffect(+setId, +programId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const saveProgram = () => {
    dispatch(saveProgramEffect(program.setId, program.id));
    navigate(`/play-program/${program.setId}/${program.id}`);
  };

  //Get program Set Name
  const setList = useAppSelector(setListListener);
  const currentSetName = useMemo(
    () => setList.find((set) => set.id === program.setId)?.setName,
    [program, setList]
  );

  return (
    <div className="pt-1">
      <div className="text-center">
        <span className="badge bg-opacity-75 bg-dark me-2">Group</span>
        <span className="fs-6 fw-bold">{currentSetName}</span>
      </div>
      <form
        className="pt-3"
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
