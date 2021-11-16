# 404-Project-FE

Welcome to Team 404's Front-End repository for our team end of course project.
We are avid plant enthusiasts and wanted to create an application for mobile which could aid in the plant maintenance,
collection monitoring and care for an users plants.

We used React native, Expo and Typescript primarily for the front-end development of our app.

The app allows an user to login, add plants to their collection, look up new plants, take a photo of a plant using the devices camera or from camera roll. This can then be used to add to the users single plant in their collection or using plant.id api find out using photo recognition what species of plant it is.
Our back-end api, built using AWS then will match the most likely plant to our database (using Dynamo DB) to tell the user information about the plant, including light/shade needs and watering requirements. The user can then mark a plant as watered and the app will tell them when that plant next needs to be watered based upon its category and its plant data.

# Running the project

Please fork from my repository on Github and clone with the green copy code button to your VS code (or equivalent code viewer application).

To run this project you need only use npm install to install the dependencies and then install expo-go upon your mobile device and computer.
Using the command `expo start` will then run the project.

## Installs used in the project:

expo
react-naviagtaion
material ui
tab navigator
expo image picker
expo camera
react-native-camera
aws-amplify
aws-amplify-react-native
@react-native-async-storage/async-storage
npm install --save @react-native-community/netinfo
npm i react-native-sensors
axios

The Back-End was built using AWs, Lamda functions, S3 Storage and Dynamo DB and can be found here:
