import React from "react";
import Quotation from "../Quotation";
import styles from "./index.css";

const Footer = ({ index }) => {
  return (
    <footer className="footer">
      <Quotation index={index} />
    </footer>
  );
};

export default Footer;
