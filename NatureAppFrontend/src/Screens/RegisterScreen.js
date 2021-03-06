import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthNavigation from "../Components/AuthNavigation";
import { Context as AuthContext } from "../Context/AuthContext";

const RegisterScreen = function ({ navigation }) {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  return (
    <View style={styles.Content}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        onWillBlur={clearErrorMessage}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/NatureFriendLogo.png")}
      />

      <TextInput
        style={styles.labels}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.labels}
        placeholder="Utilizador"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        secureTextEntry
        style={styles.labels}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        secureTextEntry
        style={styles.labels}
        placeholder="Confirmar Password"
        value={retypedPassword}
        onChangeText={setRetypedPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.Button}
        onPress={() => signup({ email, username, password, retypedPassword })}
      >
        <Text style={styles.Text}>Registar</Text>
      </TouchableOpacity>

      <AuthNavigation textLink="J?? possui conta?" navigationText="Login" />

      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <Text>Ir para outros ecrans</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f3f8",
  },
  labels: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: 275,
    height: 40,
  },
  title: {
    color: "#70af85",
    marginTop: -40,
    marginBottom: 40,
    fontSize: 38,
    fontWeight: "bold",
  },
  icon: {
    height: 230,
    width: 350,
  },
  Button: {
    backgroundColor: "#70af85",
    borderRadius: 15,
    paddingHorizontal: 15,
    borderWidth: 0,
    marginTop: 20,
    elevation: 9,
    height: 40,
    width: 135,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  Text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  errorMessage: {
    color: "#E32A02",
    marginTop: 10,
    fontSize: 15,
    alignSelf: "center",
  },
});

export default RegisterScreen;
