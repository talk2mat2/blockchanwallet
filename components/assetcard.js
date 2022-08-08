import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const AssetCard = ({ item }) => {
  // React.useEffect(() => {
  //   console.log("item", item.item);
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.assename}>
        <Image
          source={{ uri: item?.item?.image }}
          fadeDuration={0}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <View>
          <Text style={styles.Header}>{item?.item.name?.substring(0, 10)}</Text>
          <Text style={styles.subText}>
            $ {item?.item.current_price?.toFixed(2)}{" "}
            <Text style={{ marginLeft: 20,color:item?.item?.price_change_percentage_24h>0?"green":"red" }}>
              {item?.item?.price_change_percentage_24h?.toFixed(2)}%
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ ...styles.Header, textAlign: "right" }}>
          0.1589 {item?.item?.symbol}
        </Text>
        <Text style={{ ...styles.subText, textAlign: "right" }}>
          $7,2345,90
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    elevation: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 120,
    padding: 14,
    marginVertical: 4,
  },
  Header: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  subText: {
    color: "black",
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: "400",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  assename: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AssetCard;
