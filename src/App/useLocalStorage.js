import React from 'react';

// custom hook that provides functionality to store and retrieve values from local storage
function useLocalStorage(itemName, initialValue) {
  // set up state for error, loading, and stored item
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  // when component mounts, retrieve stored item from local storage, or create a new one if not found
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        // update state with stored item, and set loading to false
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 3000);
  });
  
  // function to save a new item to local storage, and update state with the new value
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  // return stored item, save function, loading state, and error state for external use
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
