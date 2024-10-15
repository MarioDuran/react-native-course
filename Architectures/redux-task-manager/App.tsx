import React from 'react';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import TodoView from './view/TodoView'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoView />
    </Provider>
  );
};

export default App;
