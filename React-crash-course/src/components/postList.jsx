import NewPost from "./NewPost";
import Post from "./post";
import classes from "./postList.module.css"; // Make sure this file exists

function PostList() {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
      <Post author="Maximus" body="Dasimus" />
      <Post author="Maxi" body="Dasi" />
    </ul>
    </>
  );
}

export default PostList;
