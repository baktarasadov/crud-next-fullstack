import React from "react";
import style from "./footer.module.css";
const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className={style.footer_container}>
        <p> &copy; Baktar Asad 2023</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
