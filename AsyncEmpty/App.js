import React, {useEffect, useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const accountSettings = (() => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Account Settings </Text>
      <View style={styles.row}>
        <Text> Marketing Emails </Text>
        <Switch 
        />
      </View>
      <View style={styles.row}>
        <Text> Push Notifications </Text>
        <Switch 
        />
      </View>
      <View style={styles.row}>
        <Text> Latest News </Text>
        <Switch 

        />
       </View>
    </View >
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }, 
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation:3,
  }

});

export default accountSettings;