import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useState } from "react";
import Modal from "./Modal";


function PostList({isPosting,onStopPosting}) {
  
  const[posts,setPosts] =useState([])

  function addPostHandler(postData){
    setPosts((existingPosts)=>[postData,...existingPosts]);
  }
  return (
    <>
     {isPosting && ( 
      <Modal onClose={onStopPosting}>
       <NewPost onCancel ={onStopPosting} onAddpost={addPostHandler}
       /> 
       </Modal>)}
      <ul className={classes.posts}>
        {posts.map((post)=> <Post author={post.author} body={post.body}/> )}
      </ul>
    </>
  );
}

export default PostList;
