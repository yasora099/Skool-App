import React from 'react'
import './AddModal.css';

type ModalProps = {
    show: boolean;
    children: React.ReactNode;
  };

const AddModal: React.FC<ModalProps> = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}    
      </section>
    </div>
  );
};
export default AddModal;