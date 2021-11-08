import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useState, useEffect, useContext, useRef } from "react";
import { getSingleUserPlantFromDatabase, deleteSinglePlantFromDatabase } from "./utils/Api";
import { getPlants } from "./utils/Api";
import { Image } from "react-native-elements";
import { Button } from "react-native-elements";
import { ActivityIndicator, Colors } from "react-native-paper";
import { UserContext, UserProvider } from "./utils/User";
import Icon from "react-native-vector-icons/FontAwesome";
import { objectLessAttributes } from "@aws-amplify/core";

const SingleUserPlant = (props: any) => {
  const { route, navigation } = props;
  const [singlePlant, setSinglePlant] = useState({});
//   const [nickname, setNickName] = useState("")
  const { plant_id, nickName } = props.route.params;
  const { userName } = useContext(UserContext);
  const imageSource = singlePlant.image;
  console.log(singlePlant)

  useEffect(() => {
    getSingleUserPlantFromDatabase(userName, plant_id)
      .then((response) => {
        setSinglePlant(response);
      })
      .catch((err) => {
        console.log(err, "<-----err");
      });
  }, []);

  function handleRemovePlant() {
    deleteSinglePlantFromDatabase(userName, plant_id)
    .then((response) => {
        navigation.navigate("Main", {screen: 'Home'});
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.subContainer}>
        <Image
          source={{ uri: imageSource }}
          style={{ width: 250, height: 250, borderRadius: 100}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.title}> {singlePlant.nickName} </Text>
          </View>
        <Text style={styles.subtitle}> {singlePlant.commonName} </Text>
        <Text style={styles.description}> Last watered: {singlePlant.lastWatered} </Text>
        <Text style={styles.description}> Next watering: {singlePlant.nextWatering} </Text>
        <Button
          icon={{ name: "arrow-right", size: 15, color: "white" }}
          title="Delete Plant"
          onPress={() => handleRemovePlant()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: "center"
  },
  header: {
    flex: 1,
  },
  section: {
    flex: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "italic",
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "300",
    marginHorizontal: 20,
    lineHeight: 20,
    alignItems: "flex-start"
  },
});

export default SingleUserPlant;