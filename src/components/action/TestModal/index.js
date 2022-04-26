import React from "react";
import styles from "./index.css";
import Modal from "../../common/Modal";
import {useApp} from '../../../AppProvider'

const TestModal = () => {

    const {useModal} = useApp()
    const {hideModal} = useModal

  return (
    <Modal>
      <div className="test-modal">
      <p>This is some text</p>
      <button onClick={()=>hideModal()}>Close Button</button>
      </div>
    </Modal>
  );
};

export default TestModal;
