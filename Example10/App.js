import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level</Text>
      <View style={styles.levelContainer}>
        <View
          style={
            styles.bubble
          }
        />
      </View>
      <Text style={styles.data}>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    marginBottom: 20, 
  },
  levelContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    borderRadius: 100,
    borderColor: 'dark',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    width: 40,
    height: 40,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  data: {
    marginTop: 20,
    fontSize: 18,
  },
});