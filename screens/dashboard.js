import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Api from "../Api";
import AssetCard from "../components/assetcard";
import Header from "../components/Header";

const Dashboard = () => {
  const [data, setData] = React.useState({
    loading: false,
    value: [],
    isError: "",
  });

  const ListData = () => {
    <View>
      <FlatList />
    </View>;
    //   <ScrollView>
    //   <AssetCard />
    //   <AssetCard />
    //   <AssetCard />
    //   <AssetCard />
    //   <AssetCard />
    // </ScrollView>
  };

  const fectData = async () => {
    setData({ loading: true, value: [], isError: "" });
    await Api.fetchMarkets()
      .then((res) => {
        // console.log(res)
        setData({ loading: false, value: res, isError: "" });
      })
      .catch((err) => {
        console.log(err);
        setData({
          loading: false,
          value: [],
          isError: "A network error ocured, try again",
        });
      });
  };

  React.useEffect(() => {
    fectData();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.balance}>
        <Text style={styles.subText}>TOTAL BALANCE</Text>
        <Text style={styles.count}>$3,619,72</Text>
      </View>
      <View style={styles.assetSection}>
        {data?.loading ? (
          <ActivityIndicator size={40} style={{ marginTop: "40%" }} />
        ) : data.value.length ? (
          <FlatList
            data={data.value}
            onRefresh={fectData}
            refreshing={data.loading}
            renderItem={(item) => <AssetCard item={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : data.isError ? (
          <Text
            style={{
              ...styles.subText,
              color: "black",
              textAlign: "center",
              marginTop: "40%",
            }}
          >
            {data.isError}
          </Text>
        ) : (
          <Text
            style={{
              ...styles.subText,
              color: "black",
              textAlign: "center",
              marginTop: "40%",
            }}
          >
            No Data
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    padding: 10,
  },
  balance: {
    height: 200,
    backgroundColor: "#022046",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  subText: {
    color: "#FFFEF7",
    fontFamily: "Poppins",
    fontSize: 17,
  },
  assetSection: {
    marginTop: 20,
    maxHeight: "70%",
    paddingBottom: 20,
  },
});

export default Dashboard;
