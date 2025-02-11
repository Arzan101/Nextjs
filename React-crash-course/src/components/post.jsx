import App from "../App";

const names = ['RAJA','DUBLIN'];

function Post(props){
 
    return(
        <div>
        {props.author}
        {props.body}
        </div>
    );
}

export default Post;