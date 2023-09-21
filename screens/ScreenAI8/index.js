import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Image } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const passwordValidation = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (!passwordValidation.test(password)) {
      Alert.alert("Error", "Password must contain at least 1 number, 1 capital letter, and 1 special character");
    } else {
      Alert.alert("Success", "Logged in successfully");
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Google login functionality is not implemented yet.");
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} color="orange" />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Button title="Login with Google" onPress={handleGoogleLogin} color="red" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12
  }
});
export default LoginScreen;