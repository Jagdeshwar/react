
import React,{useState} from 'react'
import TodoList from './TodoList';
function App() {
  useState([]);
  return ( 
    < >
      <TodoList />
      <input type="text" value="" />
      <button>Ok</button>
      <button> Todo Complete</button>
    </>
  );
}

export default App;
