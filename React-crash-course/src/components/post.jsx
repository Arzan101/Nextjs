function Post(props) {
    return (
      <div>
        <h3>{props.author}</h3>
        <p>{props.body}</p>
      </div>
    );
  }
  
  export default Post;
  