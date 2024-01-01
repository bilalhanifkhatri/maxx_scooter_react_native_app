import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feature from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = (props) => {
  return (
    <View style={styles?.container}>
      <View style={styles?.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Feature name="chevron-left" color={"#fff"} size={25} />
        </TouchableOpacity>
        <Feature name="shopping-cart" color={"#fff"} size={25} />
      </View>
      <Image source={require(`../images/2.png`)} style={styles?.headerImage} />
      <View style={styles?.cont3}>
        <Text style={styles?.title}>Maxx Scooter</Text>
        <Text style={styles?.subtitle}>Maxx Scooter</Text>
        <View style={styles?.cont2}>
          <Text style={{ ...styles?.title, flex: 1, marginTop: 0 }}>
            Colors
          </Text>
          <View style={styles?.selected}>
            <View style={styles?.c1} />
          </View>
          <View style={styles?.c2} />
          <View style={styles?.c3} />
        </View>
        <Text style={styles?.text}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took
        </Text>
        <View style={styles?.con1}>
          <FontAwesome name="heart-o" color={"#000"} size={25} />
          <TouchableOpacity style={styles?.btn}>
            <Text style={styles?.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
  },
  subtitle: {
    color: "#474747",
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    paddingRight: 80,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: "#E2443B",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
  },
  con1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  c3: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#529CC0",
  },
  c2: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: "#529C47",
  },
  c1: {
    width: 20,
    height: 20,
    borderRadius: 15,

    backgroundColor: "#E24438",
  },
  selected: {
    width: 30,
    height: 30,
    borderRadius: 24,
    borderColor: "#E2443B",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cont2: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerImage: {
    height: "45%",
    width: "50%",
    objectFit: "contain",
  },
  cont3: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
  },
});
