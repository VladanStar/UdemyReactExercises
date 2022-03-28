import React from "react";
import { ReactDOM } from "react";
import classes from "./Modal.module.css";

const portalModal = document.getElementById("overlays");

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
    return (
        <React.Fragment >
            {/* <Backdrop />
            
            <ModalOverlay>{props.children}</ModalOverlay> */}
            {ReactDOM.createPortal(<Backdrop />,portalModal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalModal)}
      </React.Fragment>
  )
};

export default Modal;
