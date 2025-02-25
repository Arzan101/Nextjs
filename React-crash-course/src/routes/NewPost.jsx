import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel,  onAddpost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    console.log(postData);
    onCancel();  // Close the modal after submitting
    onAddpost(postData);
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={enteredBody}  // Ensure the textarea is controlled
          onChange={bodyChangeHandler}
        />
      </p>
      {/* Optional: If you want to display the entered body */}
      {/* <p>{enteredBody}</p> */}
      
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={enteredAuthor}  // Ensure the input is controlled
          onChange={authorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>  
    </Modal>
  );
}

export default NewPost;
