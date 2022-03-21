import React from 'react';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm/';
import { CreateTodoButton } from '../CreateTodoButton/';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal/';
import { TodoLoading } from '../TodoLoading/';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter  />
      <TodoSearch   />
      <TodoList>
        {error && <h1>404 hubo un error</h1>}
        {loading && new Array(4).fill(0).map((_, index) => (
          <TodoLoading/>
        ))}

        {(!loading && !searchedTodos.length) && <h1>Crea tu primer to do</h1>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {
        !!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  );
}

export { AppUI };