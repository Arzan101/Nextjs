import NewPost from "../routes/NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useEffect, useState } from "react";



function PostList({}) {
   
  const[posts,setPosts] =useState([])

  useEffect(()=>{
  async function fetchPost() {
    const response = await fetch('http://localhost:8080/posts')
    const resData = await response.json();
    setPosts(resData.posts)
  }
  fetchPost();
  
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
