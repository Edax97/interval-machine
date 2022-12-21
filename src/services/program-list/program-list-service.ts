import { ProgramListState } from "../../types/program-list/program-list-state.type";
import { handleError, handleResponse } from "../api-utils/api-utils";
import { initialProgramList } from "./initial-program-list";
//const PROGRAMS_URL = "http://localhost:3001/programs";

export function fetchData<T>(API_URL: string) {
  return fetch(API_URL)
    .then(handleResponse<T>)
    .catch(handleError);
}
export function getLocalData<T>(data: T): Promise<T | null> {
  return new Promise((resolve, reject) => {
    if (data) resolve(data);
    else resolve(null);
  });
}

export function getProgramsService() {
  return getLocalData<ProgramListState>(initialProgramList);
}
