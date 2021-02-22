import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NotActionableDialog from "../NotActionableDialog";
import MultistepDialog from "../MultistepDialog";
import DoNowModal from "../DoNowModal";
import CreateDialog from "../../action/CreateDialog";
import {useApp} from '../../../AppProvider';
import { guidingQuestions } from "../constants";


const DecisionDialog = ({ data, deleteById, disabled }) => {
  const [open, setOpen] = useState(false);
  const [decisionNumber, setDecisionNumber] = useState(0);
  const [currDecision, setDecision] = useState("");
  const {useInbasket} = useApp()
  const {setInbasket} = useInbasket
  const [count, setCount] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInbasket([])
    setOpen(false);
    setDecision("");
    setDecisionNumber(0);
  };

  const getPreviousStep = () => {
    decrementDecisionNumber();
    setDecision("")
  };

  const decrementDecisionNumber = () => {
    setDecisionNumber((number) => number - 1);
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

setTimeout(()=>{
  setCount(count+1)
},1000)

  return (
    <div style={{ margin: "10px" }}>
      <Button variant="outlined" disabled={disabled} onClick={handleClickOpen}>
        {data.description}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {decisionNumber === 0 && currDecision === "No" ? (
          <NotActionableDialog
            data={data}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}
        {decisionNumber === 1 && currDecision === "No" ? (
          <MultistepDialog
            open={decisionNumber === 1 && currDecision === "No"}
            setOpen={setOpen}
            data={data}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}
        {decisionNumber === 2 && currDecision === "No" ? (
          <DoNowModal
            initialTime={180}
            data={data}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}
        {decisionNumber === 3 && currDecision === "No" ? (
          <CreateDialog
            data={data}
            delegate={true}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}
        {decisionNumber === 4 && currDecision === "No" ? (
          <CreateDialog
            data={data}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}
        {decisionNumber === 5 && currDecision === "No" ? (
          <CreateDialog
            data={data}
            open={true}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}
        {decisionNumber === 5 && currDecision === "Yes" ? (
          <CreateDialog
            data={data}
            hasDeadline={true}
            deleteById={deleteById}
            getPreviousStep={getPreviousStep}
          />
        ) : (
          ""
        )}

        <DialogTitle>{guidingQuestions[decisionNumber]}</DialogTitle>
        <DialogContent>
          <DialogContentText>{data.description}</DialogContentText>
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
