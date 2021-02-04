import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NotActionableDialog from "../../braindump/NotActionableDialog";
import MultistepDialog from "../../braindump/MultistepDialog";
import DoNowModal from "../../braindump/DoNowModal";
import CreateDialog from "../../action/CreateDialog";
import { guidingQuestions } from "../../braindump/constants";

const DecisionDialog = ({ braindump }) => {
  const [open, setOpen] = useState(false);
  const [decisionNumber, setDecisionNumber] = useState(0);
  const [currDecision, setDecision] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDecision("");
    setDecisionNumber(0);
  };

  //Once a braindump item is processed (e.g. Deleted, Incubated, Referenced) close all modals and reset all state
  const onProcessed = async () => {
    handleClose();
  };

  const clearDecision = () => {
    setDecision("");
  };

  const handleDecision = (decision) => {
    if (decision === "Yes") {
      setDecision("Yes");
      setDecisionNumber(decisionNumber + 1);
    }
    if (decision === "No") {
      setDecision("No");
    }
  };

  return (
    <div>
      <Button variant="outlined" style={{margin:"10px"}}onClick={handleClickOpen}>
        {braindump.description}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {decisionNumber === 0 && currDecision === "No" ? (
          <NotActionableDialog
            onProcessed={onProcessed}
            braindump={braindump}
            clearDecision={clearDecision}
          />
        ) : (
          ""
        )}
        {decisionNumber === 1 && currDecision === "No" ? (
          <MultistepDialog braindump={braindump} />
        ) : (
          ""
        )}
        {decisionNumber === 2 && currDecision === "No" ? (
          <DoNowModal initial={180} />
        ) : (
          ""
        )}
        {decisionNumber === 3 && currDecision === "No" ? (
          <CreateDialog delegate={true} braindump={braindump} onProcessed={onProcessed} />
        ) : (
          ""
        )}
        {decisionNumber === 4 && currDecision === "No" ? (
          <CreateDialog onProcessed={onProcessed} braindump={braindump} />
        ) : (
          ""
        )}
        {decisionNumber === 5 && currDecision === "No" ? (
          <CreateDialog braindump={braindump} open={true} onProcessed={onProcessed} />
        ) : (
          ""
        )}
        {decisionNumber === 5 && currDecision === "Yes" ? (
          <CreateDialog
            hasDeadline={true}
            onProcessed={onProcessed}
            braindump={braindump}
          />
        ) : (
          ""
        )}

        <DialogTitle>{guidingQuestions[decisionNumber]}</DialogTitle>
        <DialogContent>
          <DialogContentText>{braindump.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDecision("No")} color="primary">
            No
          </Button>
          <Button onClick={() => handleDecision("Yes")} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DecisionDialog;
