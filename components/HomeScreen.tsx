import React from "react";
import { useState, useContext, useEffect } from "react";
import { Platform } from "react-native";
import { configureFonts } from "react-native-paper";
import { Auth } from "aws-amplify";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { UserContext, UserProvider } from "./utils/User";
import { getUserFromDatabase, getUserPlantsFromDatabase } from "./utils/Api";
import { FlatList } from "react-native-gesture-handler";
import { ProgressBar, Colors } from "react-native-paper";
import { ListItem, Avatar } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type cameraScreenProps = {navigation: any, props: any}

function HomeScreen({navigation}, props: any) {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/IMG_0308_5.png")} style={styles.logo} />
      <Text style={styles.title}>A plant management app</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("Inventory");
          
        }
      } style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        <MaterialCommunityIcons style={styles.buttonText} name="arrow-right" size={26} />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004346",
    paddingTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    flex: 1 / 2,
    // fontFamily: "Futura",
    //fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    color: "white",
  },
  logo: {
    resizeMode: "contain",
    // aspectRatio: 0.6,
    height: 90,
    width: "70%",
  },
  
    button: {
      backgroundColor: '#09BC8A',
      padding: 20,
      borderRadius: 5,
      width: "50%",
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
        },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,  
      elevation: 18,
    },
    buttonText: {
      fontSize: 20,
      color: '#004346',
      textAlign: "center"
    },
});

export default HomeScreen;
