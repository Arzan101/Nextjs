import classes from './Modal.module.css'


function Modal({children,onClose}){
    return(
    <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.Modal}>
            {children}
        </dialog>
    </div>
    )
}

export default Modal;

//{{{Modal wrapper hai uske andr jo newpost ka content hai PostList.jsx wo chilren h uske show krne children use krna pdta 
//react mai wo direct show nhi hota}}}