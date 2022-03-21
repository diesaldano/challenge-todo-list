import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearch = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
      <input className="TodoSearch"
        placeholder="Search todos"
        value={searchValue}
        onChange={onSearch} 
      />
  )
}

export { TodoSearch };
