import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <h2 className="TodoCounter">Has completado {total} de {completed} TODOs</h2>
  );
}

export { TodoCounter };
