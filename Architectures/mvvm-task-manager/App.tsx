import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoView from './view/TodoView';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TodoView />
    </SafeAreaView>
  );
};

export default App;
