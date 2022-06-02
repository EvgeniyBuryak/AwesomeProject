/**
 * @format
 */

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TodoProvider} from './src/ContextProvider/todoContext';

const Root = () => {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);

LogBox.ignoreLogs(['Warning: ...']);
