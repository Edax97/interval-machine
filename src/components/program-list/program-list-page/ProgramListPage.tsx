import React from "react";
import { ProgramListContainer } from "../program-list-container/ProgramListContainer";
import { SetSelectorContainer } from "../set-selector/set-selector-container/SetSelectorContainer";

export function ProgramListPage() {
  return (
    <div className="text-center">
      <div className="">
        <SetSelectorContainer />
      </div>
      <div className="mt-3">
        <ProgramListContainer />
      </div>
    </div>
  );
}
