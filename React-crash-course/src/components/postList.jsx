import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useEffect, useState } from "react";
import Modal from "./Modal";


function PostList({isPosting,onStopPosting}) {
   
  const[posts,setPosts] =useState([])

  useEffect(()=>{
  async function fetchPost() {
    const response = await fetch('http://localhost:8080/posts')
    const resData = await response.json();
    setPosts(resData.posts)
  }
  
  },[])
  function addPostHandler(postData){
    fetch('http://localhost:8080/posts',{
      method:'POST',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type':'application/json'
      }
    })
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
        {posts.map((post)=> <Post key={post} author={post.author} body={post.body}/> 
      )}
      </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign:'center',color:'white'}}>
          <h2>There are No Posts</h2>
          <p>Try adding Some!</p>

        </div>
      )}
      
    </>
  );
}

export default PostList;
