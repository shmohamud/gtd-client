import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { useApp } from "../../../AppProvider";
import "./index.css";

const StepperModal = ({ data }) => {
    const{useModal} = useApp()

  const [activeStep] = useState(1);
  const [question, setQuestion] = useState("This is the first question");
  const stepDetails = {
    1: {
      "yes": {
        callback: () => {
          setQuestion("Test 2nd Question");
        },
      },

      "no": {
        callback: () => {
            useModal.showModal()
          console.log("No hit on step: ", activeStep);
        },
      },
    },
  };
  const handleClickNext = () => {
    console.log("Stepper Modal Next: ")

    stepDetails[activeStep]["yes"]["callback"]()
  };

  const handleClickBack = () => {
    stepDetails[activeStep]["no"]["callback"]()    
    console.log("Stepper Modal Next: ")

  };

  return (
    <Modal>
      <div className="stepper-container" className="modal-content">
        <button onClick={()=> handleClickBack()}>Back</button>
        <button onClick={()=> handleClickNext()}>Next</button>
      </div>
    </Modal>
  );
};

export default StepperModal;
