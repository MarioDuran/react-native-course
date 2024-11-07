// App.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PostList from './PostList'
import CreatePost from './CreatePost';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <CreatePost />
      <PostList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
