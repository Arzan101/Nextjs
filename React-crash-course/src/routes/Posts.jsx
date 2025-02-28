import '../App.css';
import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList'

function Posts() {
  return (
    <>
    <Outlet/>      
      <main>  
        <PostList
        />
      </main> 
    </>
  );
}

export default Posts;
