import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

// Componente principal que renderiza la aplicación
function App() {

  // Custom hook para manejar la lógica de los todos
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  // Renderización del componente principal
  return (
    <React.Fragment>
      {/* Encabezado de la aplicación */}
      <TodoHeader>
        {/* Contador de todos */}
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        {/* Búsqueda de todos */}
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      {/* Lista de todos */}

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={()=><TodosError/>}
        onLoading={()=><TodosLoading/>}
        onEmptyTodos={()=><EmptyTodos/>}
        onEmptySearchResults={
        (searchText)=> <p>No hay resultados para {searchText}</p>
        }
        // render={todo=> 
        //   (<TodoItem
        //   key={todo.text}
        //   text={todo.text}
        //   completed={todo.completed}
        //   onComplete={() => completeTodo(todo.text)}
        //   onDelete={() => deleteTodo(todo.text)}
        // />)}
      >
      {todo=> 
          (<TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
        )}
       </TodoList> 
      {/* Modal para agregar nuevos todos */}
      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      {/* Botón para agregar nuevos todos */}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;