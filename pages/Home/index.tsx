import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "@rneui/themed";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
const Index: React.FC = () => {
  return (
    <View>
      <Header
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    </View>
  );
};

export default Index;
