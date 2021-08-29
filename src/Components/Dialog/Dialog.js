import "./Dialog.css";

import CurveButton from "../Button/CurveButton/CurveButton";

import CloseIcon from "@material-ui/icons/Close";

import BackDrop from "../../Components/BackDrop/BackDrop";
function Dialog({
  children,
  title,
  customAction,
  isOpen,
  setIsDialogOpen,
  onSave,
}) {
  // const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return null;
  return (
    <BackDrop onClickHandler={() => setIsDialogOpen(false)}>
      <div className="dialog" onClick={(event) => event.stopPropagation()}>
        <div className="dialog__header">
          <h2>{title}</h2>
          <CloseIcon onClick={() => setIsDialogOpen(false)} />
        </div>
        <div className="dialog__content">{children}</div>
        <div className="dialog__footer">
          <div>{customAction}</div>

          <div>
            <CurveButton title="Save" color="blue" onClick={onSave} />
          </div>
        </div>
      </div>
    </BackDrop>
  );
}

export default Dialog;
