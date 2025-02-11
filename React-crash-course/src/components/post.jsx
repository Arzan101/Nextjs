import classes from './post.module.css'

function Post(props) {
    return (

      <li className={classes.post}>
        <h3 className={classes.author}>{props.author}</h3>
        <p className={classes.body}>{props.body}</p>
      </li>
    );
  }
  
  export default Post;
  