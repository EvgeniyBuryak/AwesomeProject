import React, {createContext, useContext} from 'react';

import {mainStore} from '../stores/mainStore';

import {useLocalObservable} from 'mobx-react';

const TodoContext = createContext(null);

export const TodoProvider = ({children}) => {
  const todoStore = useLocalObservable(mainStore);

  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoContext);
