import React from "react";
import { Link} from "react-router-dom";
import styles from './index.css'

export default function LinkRouter() {
  return (
    <div className='wrapper'>
      <nav>
      <Link to="/">Execute</Link>
      <Link to="/capture">Capture</Link>
      <Link to="/next-actions">Next Actions</Link>
      <Link to="/plan">Plan</Link>
      </nav>
    </div>
  );
}
