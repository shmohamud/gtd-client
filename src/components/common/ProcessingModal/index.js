import React, { useState } from "react";
import Modal from "../Modal";
import { useApp } from "../../../AppProvider";
import "./index.css";

const ProcessingModal = ({ data, deleteById }) => {
  const { useModal } = useApp();

  const [activeStep, setActiveStep] = useState(1);
  const [question, setQuestion] = useState("Is this actionable?");

  const resetState = () => {
    setActiveStep(1);
    setQuestion("Is this actionable");
  };

  //TODO: Conditionally render "deadline" DatePicker based on step 5 y/n.

  const stepDetails = {
    1: {
      yes: {
        callback: () => {
          setQuestion("Is this single step?");
        },
      },

      no: {
        callback: () => {
          useModal.showModal("CREATE_PROJECT_MODAL", {});
          resetState();
          console.log("No hit on step: ", activeStep);
        },
      },
    },
    2: {
      yes: {
        callback: () => {
          setQuestion("Is this more than 2m to complete?");
        },
      },

      no: {
        callback: () => {
          useModal.showModal("DO_NOW_MODAL", {});
          resetState();
        },
      },
    },
    3: {
      yes: {
        callback: () => {
          setQuestion("Do it myself (if no selected, must delegate it...)?");
        },
      },

      no: {
        callback: () => {
          useModal.showModal("DO_NOW_MODAL", {startTime:180,
          data,
          deleteById,
          })
          resetState();
        },
      },
    },
    4: {
      yes: {
        callback: () => {
          setQuestion("Is there a concrete *hard* deadline?");
        },
      },

      no: {
        callback: () => {
          useModal.showModal("CREATE_ACTION_MODAL", {
            description: "",
            delegate: true,
          });
          resetState();
        },
      },
    },
    5: {
      yes: {
        callback: () => {
          useModal.showModal("CREATE_ACTION_MODAL", {});
          resetState();
        },
      },

      no: {
        callback: () => {
          useModal.showModal("CREATE_ACTION_MODAL");
          resetState();
        },
      },
    },
  };

  const handleClickYes = async () => {
    stepDetails[activeStep]["yes"]["callback"]();
    activeStep !== 5 && setActiveStep(activeStep + 1);
  };

  const handleClickNo = () => {
    stepDetails[activeStep]["no"]["callback"]();
  };

  return (
    <Modal>
      <div className="modal-content" >
        <h2>{question}</h2>
        <button onClick={() => handleClickNo()}>No</button>
        <button onClick={() => handleClickYes()}>Yes</button>
      </div>
    </Modal>
  );
};

export default ProcessingModal;
