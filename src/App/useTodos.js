import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Hook personalizado para manejar una lista de tareas
function useTodos() {
  // Obtiene la lista de tareas guardada en local storage y define funciones para guardar datos, así como los estados de carga y error
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // Estado para manejar el valor del campo de búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  // Estado para manejar la apertura y cierre del modal
  const [openModal, setOpenModal] = React.useState(false);

  // Variables para almacenar la cantidad de tareas completadas y el total de tareas
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Lista de tareas buscadas
  let searchedTodos = [];

  // Filtrar la lista de tareas según la cadena de búsqueda o mostrar todas las tareas
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Función para agregar una tarea a la lista de tareas
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  // Función para marcar una tarea como completada
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Función para eliminar una tarea de la lista
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  // Retorna el estado de carga y error, la cantidad de tareas completadas y el total de tareas, la lista de tareas buscadas,
  // y las funciones para agregar, marcar y eliminar tareas
  return {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    };
}

export { useTodos };
