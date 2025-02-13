import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; 
import { useState } from "react";

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} enteredBody={enteredBody} /> {/* Ensure enteredBody is passed */}
      <ul className={classes.posts}>
        <Post author="Maximus" body={enteredBody} />
        <Post author="Maxi" body="Dasi" />
      </ul>
    </>
  );
}

export default PostList;
