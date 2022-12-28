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
    <div className="d-flex align-items-stretch" style={{ height: "2.5rem" }}>
      <input
        className="form-control bg-secondary"
        style={{ flex: "0 1 12rem" }}
        type="text"
        placeholder="Program Name"
        value={props.programName}
        onChange={(e) => props.setProgramName(e.target.value)}
        required
      />

      <div style={{ flex: "0 0 5rem" }} className="me-auto input-group">
        <span className="ms-2  p-2 input-group-text text-center">
          <MdRepeat className="fs-6" />
        </span>
        <input
          type="text"
          className="form-control bg-secondary text-center px-2"
          value={props.loops}
          onChange={(e) => props.setLoops(+e.target.value)}
          onSelect={(e) => e.currentTarget.select()}
        />
      </div>

      <button
        type="submit"
        className="ps-3  pe-1 btn d-flex align-items-center"
        style={{ fontSize: "28px" }}
        aria-label="Save program"
      >
        <MdSave />
      </button>
    </div>
  );
}
