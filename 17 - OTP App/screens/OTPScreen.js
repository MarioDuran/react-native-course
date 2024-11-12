import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api';
import { OtpInput } from "react-native-otp-entry";

export default function OTPScreen({ route, navigation }) {
  const { email } = route.params;
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = async () => {
    try {
      console.log("Request Body:", { email, otp });

      const response = await api.post('/api/otp/verify-otp', { email, otp});
      console.log(response.data)

      if (response.status === 200) {
        Alert.alert('OTP Verified', 'You have successfully verified your OTP.');
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid OTP', 'Please try again.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Verification Failed', 'An error occurred during verification. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <OtpInput
        numberOfDigits={6}
        focusColor="green"
        focusStickBlinkingDuration={500}
        onTextChange={setOtp}
        onFilled={setOtp}
      />
      <Button title="Submit OTP" onPress={handleOtpSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  }
});
