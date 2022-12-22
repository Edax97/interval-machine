import React from "react";
import { MdSave, MdRepeat } from "react-icons/md";

import "./program-controls-component.scss";

interface PropsType {
  programName: string;
  loops: number;
  setProgramName: (programName: string) => void;
  setLoops: (loops: number) => void;
}

export function ProgramControlsComponent(props: PropsType) {
  return (
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

      <div className="ms-3 ms-lg-4 me-auto d-flex">
        <span className="input-group-text p-2 text-center">
          <MdRepeat className="fs-6" />
        </span>
        <input
          type="text"
          size={1}
          className="form-control bg-secondary text-center px-2"
          value={props.loops}
          onChange={(e) => props.setLoops(+e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="ps-3 btn p-1"
        style={{ fontSize: "28px" }}
        aria-label="Save program"
      >
        <MdSave />
      </button>
    </div>
  );
}
