import { ProgramListState } from "../../types/program-list/program-list-state.type";

export const loadState = <T>(item: string): T | null => {
  try {
    const serializedState = localStorage.getItem(item);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

export const saveState = <T>(item: string, state: ProgramListState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(item, serializedState);
  } catch (err) {
    console.log("WRITING ERROR:", err);
    // ignore write errors
  }
};
