
const names = ['RAJA','DUBLIN'];

function Post (){
    const chosenName = Math.random() > 0.5 ? names[0]: names[1];
    return(
    <div>
        <h1>NIGGESHWAR </h1>
        <h1>{chosenName}</h1>
    </div>
    );
}

export default Post;