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
  onDelete,
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
            {onDelete && (
              <CurveButton
                title="Delete"
                color="white"
                onClick={() => {
                  setIsDialogOpen(false);
                  onDelete();
                }}
              />
            )}
            <CurveButton
              title="Save"
              color="blue"
              onClick={() => {
                setIsDialogOpen(false);

                onSave();
              }}
            />
          </div>
        </div>
      </div>
    </BackDrop>
  );
}

export default Dialog;
