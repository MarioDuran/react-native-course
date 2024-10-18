import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import PostService, { Post } from './PostService';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState<string>('');

  const fetchPosts = async () => {
    try {
      const data = await PostService.getAllPosts();
      setPosts(data);
    } catch (error) {
      console.log('Error', 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await PostService.deletePost(id);
      setPosts(posts.filter(post => post.id !== id));
      console.log('Success', 'Post deleted');
    } catch (error) {
      console.log('Error', 'Failed to delete post');
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPostId(post.id);
    setEditingContent(post.content);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setEditingContent('');
  };

  const handleSaveEdit = async (id: number) => {
    if (editingContent.trim().length === 0) {
      console.log('Error', 'Post content cannot be empty');
      return;
    }

    try {
      await PostService.updatePost(id, editingContent);
      setPosts(posts.map(post => (post.id === id ? { ...post, content: editingContent } : post)));
      setEditingPostId(null);
      setEditingContent('');
      console.log('Success', 'Post updated');
    } catch (error) {
      console.log('Error', 'Failed to update post');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              {editingPostId === item.id ? (
                <View style={styles.editContainer}>
                  <TextInput
                    style={styles.input}
                    value={editingContent}
                    onChangeText={setEditingContent}
                  />
                  <TouchableOpacity style={styles.saveButton} onPress={() => handleSaveEdit(item.id)}>
                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelEdit}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.postContentContainer}>
                  <Text style={styles.postContent}>{item.content}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item)}>
                      <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                      <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  postContainer: {
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  postContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postContent: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 8,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PostList;
