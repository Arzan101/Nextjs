import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useState } from "react";
import Modal from "./Modal";

function PostList({isPosting,onStopPosting}) {
  

  return (
    <>
     {isPosting && ( 
      <Modal onClose={onStopPosting}>
       <NewPost onCancel ={onStopPosting}
       /> 
       </Modal>)}
      <ul className={classes.posts}>
       
        <Post author="Maxi" body={"ssssss"} />
      </ul>
    </>
  );
}

export default PostList;
