import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import InventoryScreen from "./InventoryScreen";
import SearchScreen from "./SearchScreen";
import LightMeterScreen from "./LightMeterScreen";
import CameraScreen from "./CameraScreen";
import ProfileScreen from "./ProfileScreen";
import { UserContext } from "./utils/User";

const Tab = createMaterialBottomTabNavigator();

function MainTabNavigator() {
  const { userName } = useContext(UserContext);

  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#172a3a" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          title:'test',
          tabBarLabel: "Inventory",
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen name='Light Meter' component={LightMeterScreen} options={{
    tabBarLabel: 'Light Meter',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="lightbulb-on-outline" color={color} size={26} />
    ),
    
    
  }} />   */}
      <Tab.Screen
        name="User's Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
