import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg)
  }

  const onComplete = () => {
    alert('Completaste el todo '+ props.text)
  }

  return (
    <button className="CreateTodoButton"
      onClick={() => onClickButton('Abrir Modal')}
    >+</button>
  );
}

export { CreateTodoButton };
