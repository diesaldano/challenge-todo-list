import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoCounter.css';

function TodoCounter() {
  const { total, completed } = React.useCallback(TodoContext)
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };
