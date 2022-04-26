import React from "react";
import styles from './index.css';
import QuickCreateModal from '../../action/QuickCreateModal';
import {useApp} from '../../../AppProvider';
const Header = () => {
    const { useAuth } = useApp();
    const { logout } = useAuth;
  return ( 
    <header className="header-container">
        <h1>Metacognizer</h1>
        <QuickCreateModal/>
        <button className="logout-btn" onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
