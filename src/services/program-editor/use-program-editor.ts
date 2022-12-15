import { useContext } from "react";
import { programEditorContext } from "./program-editor-provider";

export const useProgramEditor = () => useContext(programEditorContext);
