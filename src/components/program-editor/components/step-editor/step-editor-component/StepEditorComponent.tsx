/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import "./step-editor-component.scss";
import {
  AiFillPlusCircle as AiMinus,
  AiFillMinusCircle as AiPlus,
} from "react-icons/ai";
import { stepStyles } from "../../../../../services/step-style/step-style";
import { CardItem } from "../../../../common/card-item/CardItem";
import { toMMSS } from "../../../../../services/utils/time-utils";
import { ModalDelete } from "../../../../common/modal/modal-delete/ModalDelete";
import { MdClear } from "react-icons/md";

interface PropsType {
  stepId: number;
  category: string;
  stepName: string;
  stepTime: number;
  onDecrement: (stepId: number, stepTime: number, changeValue: number) => void;
  onIncrement: (stepId: number, stepTime: number, changeValue: number) => void;
  onRemove: (stepId: number) => void;
  onSetStepName: (stepId: number, stepName: string) => void;
}

export function StepEditorComponent(props: PropsType) {
  const [minutes, seconds] = useMemo(
    () => toMMSS(props.stepTime),
    [props.stepTime]
  );

  const nameLabel = useMemo(
    () => (props.category === "normal" ? "Step" : "Notifier"),
    []
  );
  const stepColor = useMemo(
    () => (props.category === "normal" ? stepStyles.normal : stepStyles.notify),
    []
  );

  const changeValue = props.category === "normal" ? 60 : 10;

  return (
    <CardItem
      className="mt-2 bg-secondary"
      removeElement={
        <ModalDelete
          title="Delete Step"
          message={`Do you want to delete ${props.stepName}?`}
          onDelete={() => props.onRemove(props.stepId)}
        >
          <MdClear />
        </ModalDelete>
      }
    >
      <div className="d-flex align-items-center pt-4">
        <div className="hint" style={{ backgroundColor: stepColor }}></div>
        <div className="step-name ms-2 me-auto">
          <input
            className="form-control bg-secondary"
            type="text"
            placeholder={nameLabel + " Name"}
            value={props.stepName}
            onChange={(e) => props.onSetStepName(props.stepId, e.target.value)}
            required
          />
        </div>

        <div className="step-time ms-2 d-flex align-items-center">
          <AiPlus
            className="step-editor-btn"
            role="button"
            onClick={() =>
              props.onDecrement(props.stepId, props.stepTime, changeValue)
            }
            style={{ color: stepColor }}
          />
          <div
            className="mx-1 card p-1"
            style={{ backgroundColor: stepColor, color: "white" }}
          >
            {minutes}:{seconds}
          </div>
          <AiMinus
            className="step-editor-btn"
            role="button"
            onClick={() =>
              props.onIncrement(props.stepId, props.stepTime, changeValue)
            }
            style={{ color: stepColor }}
          />
        </div>
      </div>
    </CardItem>
  );
}
