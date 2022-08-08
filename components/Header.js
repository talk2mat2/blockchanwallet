import React, { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Home</Text>
      <View style={styles.user}>
        <Ionicons style={{marginRight:10}} name="options" size={33} color="#B2BEB5" />
        <MaterialIcons name="account-circle" size={35} color="#B2BEB5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    elevation:1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    paddingHorizontal: 20,
  },
  Header: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  user:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }
});

export default Header;
