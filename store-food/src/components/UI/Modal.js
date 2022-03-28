import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.childred}</div>
      </div>
    );
  };
  return <div>Modal</div>;
};

export default Modal;
