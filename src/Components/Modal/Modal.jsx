import React from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "display-block" : "display-none";

    return (
        <div className={`modal__container ${showHideClassName}`}>
            <div className="modal__dialog">
                <section className="modal__body">
                    {children}
                    <span className="button-close modal__close material-icons" onClick={handleClose}>close</span>
                </section>
            </div>
        </div>
    );
};

export default Modal;