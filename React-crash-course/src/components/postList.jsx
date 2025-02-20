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
      {posts.length>0 && (<ul className={classes.posts}>
        {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body}/> )}
      </ul>)}
      {posts.length === 0 (
        <div style={{textAlign:'center',color:'white'}}>
        <h2>There are no Posts</h2>
        <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
