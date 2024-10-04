import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';

// Sample data for FlatList with image modes
const imageData = [
  { id: '1', mode: 'cover', description: 'Cover Mode' },
  { id: '2', mode: 'contain', description: 'Contain Mode' },
  { id: '3', mode: 'stretch', description: 'Stretch Mode' },
  { id: '4', mode: 'repeat', description: 'Repeat Mode' },
  { id: '5', mode: 'center', description: 'Center Mode' },
];

// Component to render each image with its mode
const ImageItem = ({ mode, description }) => (
  <View style={styles.imageContainer}>
    <Image
      source={require('../assets/snack-icon.png')} // Demo image
      style={styles.image}
      resizeMode={mode} // Use the resizeMode passed as prop
    />
    <Text style={styles.text}>{description}</Text>
  </View>
);

const ImagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ImageItem mode={item.mode} description={item.description} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ImagesScreen;
