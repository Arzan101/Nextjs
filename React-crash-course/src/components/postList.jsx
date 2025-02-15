import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useState } from "react";
import Modal from "./Modal";

function PostList() {
  const [modalIsVisible,setModalIsVisibles] = useState(true)

  const [enteredBody, setEnteredBody] = useState('');

  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler(){
    setModalIsVisibles(false)
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // let modalContent;

  // if (modalIsVisible){
  //  modalContent= (
  //  <Modal onClose={hideModalHandler}>
  //     <NewPost 
  //     onBodyChange={bodyChangeHandler}
  //     onAuthorChange={authorChangeHandler}  
  //     enteredBody={enteredBody} enteredAuthor={enteredAuthor} 
  //     /> {/* Ensure enteredBody is passed */}
  //   </Modal>
  //  )
  // }

  return (
    <>
     {modalIsVisible && ( 
      <Modal onClose={hideModalHandler}>
       <NewPost 
       onBodyChange={bodyChangeHandler}
       onAuthorChange={authorChangeHandler}  
       enteredBody={enteredBody} enteredAuthor={enteredAuthor} 
       /> {/* Ensure enteredBody is passed */}
       </Modal>)}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maxi" body={"ssssss"} />
      </ul>
    </>
  );
}

export default PostList;
