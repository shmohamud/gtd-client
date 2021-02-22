import React from "react";
import styles from './index.css';
import QuickCreateDialog from '../../action/QuickCreateDialog';
import {useApp} from '../../../AppProvider';
const Header = () => {
    const { useAuth } = useApp();
    const { logout } = useAuth;
  return ( 
    <header className="header-container">
        <h1>Ladan</h1>
        <QuickCreateDialog/>
        <button className="logout-btn" onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
