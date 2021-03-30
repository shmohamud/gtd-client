import React, {useState} from "react";
import styles from './index.css';
import QuickCreateDialog from '../../action/QuickCreateDialog';
import {useApp} from '../../../AppProvider';
const Header = () => {
    const { useAuth } = useApp();
    const { logout } = useAuth;
    const [open, setOpen] = useState(false);

  return ( 
    <header className="header-container">
        <h1>Metacognizer</h1>
        <div className={"logout-quick-create-container"}>
        <QuickCreateDialog open={open} setOpen={setOpen}/>
        <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
    </header>
  );
};

export default Header;
