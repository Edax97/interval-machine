import { MdRepeat as RiRepeat } from "react-icons/md";
import "./program-editor-component.scss";
import { MdCheck, MdOutlineDeleteForever } from "react-icons/md";
import { StepListEditorContainer } from "../step-editor/step-likst-editor-container/StepListEditorContainer";

interface PropsType {
  programName: string;
  loops: number;
  setProgramName: (programName: string) => void;
  setLoops: (loops: number) => void;
  saveProgram: () => void;
  deleteProgram: () => void;
}

export function ProgramEditorComponent(props: PropsType) {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="">
          <input
            id="program-name"
            className="form-control bg-secondary"
            type="text"
            placeholder="Program Name"
            value={props.programName}
            onChange={(e) => props.setProgramName(e.target.value)}
          />
        </div>
        <RiRepeat className="fs-4 ms-3" />
        <div className="ms-2 me-auto">
          <input
            id="loops-input"
            className="form-control bg-secondary"
            type="number"
            placeholder="Loops"
            value={props.loops}
            onChange={(e) => props.setLoops(+e.target.value)}
          />
        </div>
        <MdOutlineDeleteForever
          className="fs-4 ms-3"
          role="button"
          aria-label="Delete program"
          onClick={() => props.deleteProgram()}
        />
        <MdCheck
          className="ms-3 fs-3"
          role="button"
          aria-label="Save program"
          onClick={() => props.saveProgram()}
        />
      </div>
      <div>
        <StepListEditorContainer />
      </div>
    </>
  );
}
