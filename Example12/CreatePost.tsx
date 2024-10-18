import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import PostService from './PostService';

const CreatePost = () => {
  const [content, setContent] = useState('');

  const handleCreatePost = async () => {
    if (content.trim().length === 0) {
      Alert.alert('Error', 'Post content cannot be empty');
      return;
    }

    try {
      await PostService.createPost(content);
      Alert.alert('Success', 'Post created');
      setContent('');
    } catch (error) {
      Alert.alert('Error', 'Failed to create post');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your post here..."
          placeholderTextColor={'lightgray'}
          value={content}
          onChangeText={setContent}
        />
        <Button title="Share" onPress={handleCreatePost} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 8,
  },
});

export default CreatePost;