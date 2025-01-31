import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with your image URL
        style={styles.image}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.heading}>Welcome Back</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>Login to continue</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <Text style={styles.orText}>OR</Text>

      {/* Social Login Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Create Account */}
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")} // Navigate to Signup Screen
        >
          <Text style={styles.signupText}> Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE6E6",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF5C8A",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 30,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginRight: "5%",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#FF5C8A",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF5C8A",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  socialButtonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  socialButton: {
    width: "80%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#FF5C8A",
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#FF5C8A",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  createAccountText: {
    fontSize: 16,
    color: "#333",
  },
  signupText: {
    fontSize: 16,
    color: "#FF5C8A",
    fontWeight: "bold",
  },
});
