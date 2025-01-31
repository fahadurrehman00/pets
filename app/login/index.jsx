import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/002/917/935/non_2x/big-isolated-cartoon-of-young-girl-and-boy-in-love-couple-sharing-and-caring-love-light-color-backgrounded-illustration-vector.jpg",
        }}
        style={styles.image}
        resizeMode='cover'
      />

      <View>
        <Text style={styles.heading}>Find Your New Friends Here</Text>
        <Text style={styles.subtext}>
          Join us and discover the best pet in your location
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("login/signin")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            onPress={() => router.push("login/signup")}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFE6E6",
  },
  image: {
    width: "100%",
    height: 400,
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
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF5C8A",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#FF5C8A",
  },
  signUpButtonText: {
    color: "#FF5C8A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
