import './App.css';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';
import { useState } from 'react';
import Modal from './components/Modal';
import NewPost from './components/NewPost';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        {modalIsVisible && (
          <Modal onClose={hideModalHandler}>
            <NewPost
              onBodyChange={bodyChangeHandler}
              onAuthorChange={authorChangeHandler}
              enteredBody={enteredBody}
              enteredAuthor={enteredAuthor}
            />
          </Modal>
        )}
        <PostList 
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
