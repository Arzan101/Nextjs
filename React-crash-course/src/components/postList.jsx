import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useState } from "react";

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');

  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}  
      enteredBody={enteredBody} enteredAuthor={enteredAuthor} /> {/* Ensure enteredBody is passed */}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maxi" body={"ssssss"} />
      </ul>
    </>
  );
}

export default PostList;
