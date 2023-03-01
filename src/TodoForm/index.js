import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {

  // state para almacenar el nuevo valor del TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');

  // función que se ejecuta cuando se cambia el valor del input
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  // función que se ejecuta cuando se cancela la acción y cierra el formulario
  const onCancel = () => {
    setOpenModal(false);
  };

  // función que se ejecuta cuando se envía el formulario
  const onSubmit = (event) => {
    event.preventDefault(); // previene la recarga de la página
    addTodo(newTodoValue); // agrega el nuevo TODO
    setOpenModal(false); // cierra el formulario
  };

  // retorna el componente JSX del formulario
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
