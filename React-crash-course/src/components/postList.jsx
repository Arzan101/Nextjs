import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useState } from "react";

function PostList() {
  const [enteredBody,setEnteredBody]= useState('');

  function bodyChangeHandler(event){
    setEnteredBody= event.target.value;
  }
  return (
    <>
    <NewPost onBodychange={bodyChangeHandler}/>
    <ul className={classes.posts}>
      <Post author="Maximus" body={enteredBody} />
      <Post author="Maxi" body="Dasi" />
    </ul>
    </>
  );
}

export default PostList;
