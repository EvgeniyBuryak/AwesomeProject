/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react';
import {stores} from './src/stores';
import {TodoProvider} from './src/ContextProvider/todoContext';

const Root = () => {
  // <Provider stores={stores}>
  // </Provider>
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
};

AppRegistry.registerComponent(
  //   <Provider {...stores}>appName</Provider>,
  //   <Provider>appName</Provider>,
  appName,
  //   () => App,
  () => Root,
);
