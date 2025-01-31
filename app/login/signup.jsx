import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/300x200" }} // Replace with your image URL
        style={styles.image}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.heading}>Create Your Account</Text>

      {/* First Name Input */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#888"
      />

      {/* Last Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#888"
      />

      {/* Profile Image (Dummy Upload Button) */}
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Profile Image</Text>
      </TouchableOpacity>

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

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
      />

      {/* Signup Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <Text style={styles.orText}>OR</Text>

      {/* Social Login Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Already Have an Account */}
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.signinLink}> Sign In</Text>
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
  uploadButton: {
    width: "90%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#FF5C8A",
    marginBottom: 10,
  },
  uploadButtonText: {
    color: "#FF5C8A",
    fontSize: 16,
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
  signinContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signinText: {
    fontSize: 16,
    color: "#333",
  },
  signinLink: {
    fontSize: 16,
    color: "#FF5C8A",
    fontWeight: "bold",
  },
});
