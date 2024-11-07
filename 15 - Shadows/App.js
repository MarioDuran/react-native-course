import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const ShadowDemo = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.normalShadow}>
        <Text style={styles.text}>Shadow 1</Text>
      </View>
      
      <Shadow distance={5} startColor={'#00000010'} offset={[0, 4]}>
        <View style={styles.shadow2}>
          <Text style={styles.text}>Shadow 2</Text>
        </View>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: '#333',
    fontSize: 18,
  },
  normalShadow: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 5,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      }
    }),
  },
  shadow2: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShadowDemo;
