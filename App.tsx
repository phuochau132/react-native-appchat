import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Avatar } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { Home, Profile } from "./pages";
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
const Tab = createBottomTabNavigator();
const App: React.FC = () => {
  console.log(Home);

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              tabBarLabel: "",
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            name="Settings"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Avatar
                  size={size}
                  containerStyle={{ backgroundColor: color }}
                  rounded
                  source={{
                    uri: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-1/141995787_512358293071430_1466381692630381917_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=9JU-HVeBW-YAX80726A&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDoE5paAm5cFlKDMu8uIl-40GYnNUnh6f3jXNnqyxwsqA&oe=64D5B0CD",
                  }}
                  icon={{ name: "rowing" }}
                />
              ),
              tabBarLabel: "",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
