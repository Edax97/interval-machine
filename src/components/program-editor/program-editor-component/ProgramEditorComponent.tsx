import { MdRepeat as RiRepeat } from "react-icons/md";
import "./program-editor-component.scss";
import { MdSave, MdArrowBack as MdCancel } from "react-icons/md";

interface PropsType {
  programName: string;
  loops: number;
  setProgramName: (programName: string) => void;
  setLoops: (loops: number) => void;
  saveProgram: () => void;
  cancelChanges: () => void;
}

export function ProgramEditorComponent(props: PropsType) {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        props.saveProgram();
      }}
    >
      <div className="d-flex align-items-center">
        <input
          id="program-name"
          className="form-control bg-secondary"
          type="text"
          placeholder="Program Name"
          value={props.programName}
          onChange={(e) => props.setProgramName(e.target.value)}
          required
        />
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
        <MdCancel
          className="fs-3 ms-3 text-muted"
          role="button"
          aria-label="Cancel changes"
          onClick={() => props.cancelChanges()}
        />
        <button
          type="submit"
          className="ms-0 ms-lg-2 fs-3 btn"
          aria-label="Save program"
        >
          <MdSave />
        </button>
      </div>
    </form>
  );
}
