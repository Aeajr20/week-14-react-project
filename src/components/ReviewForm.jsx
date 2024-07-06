import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
