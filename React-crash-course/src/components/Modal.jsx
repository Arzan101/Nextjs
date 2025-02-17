import classes from './Modal.module.css'

function Modal({ children, onClose }) {
  // This function prevents the click from bubbling up to the backdrop
  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <dialog open className={classes.Modal} onClick={handleModalClick}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
