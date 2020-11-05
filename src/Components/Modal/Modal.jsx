import React from 'react';
import Close from '@material-ui/icons/Close';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "display-block" : "display-none";

    return (
        <div className={`modal__container ${showHideClassName}`}>
            <div className="modal__dialog modal__body">
                {children}
                <Close className="button-close modal__close" onClick={handleClose} />
            </div>
        </div>
    );
};

export default Modal;
