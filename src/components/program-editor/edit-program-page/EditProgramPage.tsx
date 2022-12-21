import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";

import { setListListener } from "../../../store/program-list/program-list.listeners";
import {
  getProgramEffect,
  saveProgramEffect,
} from "../../../store/program/program.effects";
import { useCurrentProgram } from "../hooks/use-current-program";
import { ProgramEditorComponent } from "../program-editor-component/ProgramEditorComponent";

export function EditProgramPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  //Edit Program
  const { program, setProgramName, setLoops } = useCurrentProgram();
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
    </div>
  );
}
