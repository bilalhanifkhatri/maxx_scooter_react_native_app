import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <View style={styles?.container}>
      <Image source={require(`../images/1.png`)} style={styles?.image} />
      <Text style={styles?.title}>Maxx Scooter</Text>
      <Text style={styles?.detail}>
        With an updated motor, and integrated anti-theft tect the maxx scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        style={styles?.btn}
        onPress={() => {
          props.navigation.navigate("Detail");
        }}
      >
        <Text style={styles?.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  image: {
    width: "110%",
    height: "50%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
    color: "#ffffff",
  },
  detail: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 20,
  },
  btn: {
    marginTop: 80,
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#E2443B",
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#ffffff",
  },
});
