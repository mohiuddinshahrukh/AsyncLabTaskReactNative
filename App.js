import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, Image, Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const _storeData = async () => {
  try {
    await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
  } catch (error) {
    // Error saving data
  }
};

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("TASKS");
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Here we'll view the users of the system added through the ASYNC Storage
      </Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={{ fontSize: 24 }}>First Name</Text>
        <Input placeholder="first name" style={{}}></Input>
        <Button title="Add" onPress={() => {}} />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Add Users" component={Article} />
      <Drawer.Screen name="View Users" component={Feed} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
