import "./Dialog.css";

import CurveButton from "../Button/CurveButton/CurveButton";
import { useState } from "react";

import BackDrop from "../../Components/BackDrop/BackDrop";
function Dialog({ children, title, customAction, isOpen, setIsDialogOpen }) {
  // const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return null;
  return (
    <BackDrop onClickHandler={() => setIsDialogOpen(false)}>
      <div className="dialog" onClick={(event) => event.stopPropagation()}>
        <div className="dialog__header">
          <h2>{title}</h2>
          <h2 onClick={() => setIsDialogOpen(false)}>X</h2>
        </div>
        <div className="dialog__content">{children}</div>
        <div className="dialog__footer">
          <div>{customAction}</div>

          <div>
            <CurveButton title="Save" color="blue" />
          </div>
        </div>
      </div>
    </BackDrop>
  );
}

export default Dialog;
