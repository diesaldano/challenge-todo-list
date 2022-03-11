import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClick = (msg) => {
    return console.log(msg)
  }

  const onComplete = () => {
    alert('Completaste el todo '+ props.text)
  }

  return (
    <button className="CreateTodoButton"
      onClick={() => onClick('Send Alert')}
    >+</button>
  );
}

export { CreateTodoButton };
