import React from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "display-block" : "display-none";

    return (
        <div className={`modal__container ${showHideClassName}`}>
            <div className="modal__dialog modal__body">
                {children}
                <span className="button-close modal__close material-icons" onClick={handleClose}>close</span>
            </div>
        </div>
    );
};

export default Modal;
