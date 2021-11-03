import React, {useState, useEffect} from 'react';
import * as Permissions from "expo-permissions"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import {Camera} from 'expo-camera'


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#354D2A',
    padding: 20,
    borderRadius: 5,
    
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain', //useful line, makes the image not square if the selected image is not
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // camera
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  cameraButton: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  
})

function CameraScreen() {
  
    const [cameraRollImage, setCameraRollImage] = useState({localUri:""})
    const [cameraPhoto, setCameraPhoto] = useState(null) //NB not in use atm
    const [haveCameraPermission, setHaveCameraPermission] = useState("")
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    function cameraFunction() {
      console.log("Check, getting in here?")
        // return (
        //  <View style={styles.cameraContainer}>
        //    <Camera style={styles.camera} type={type}>
        //      <View style={styles.buttonContainer}>
        //        <TouchableOpacity
        //          style={styles.cameraButton}
        //          onPress={() => {
        //              setType(
        //                  type === Camera.Constants.Type.back
        //                    ? Camera.Constants.Type.front
        //                    : Camera.Constants.Type.back
        //                );
        //              }}>
        //              <Text style={styles.text}> Flip </Text>
        //            </TouchableOpacity>
        //          </View>
        //        </Camera>
        //      </View>
        //    );
         }


  let openCameraAsync = async () => {
    //  let cameraPermissionResult = await Permissions.askAsync(Permissions.CAMERA)
      let cameraPermissionResult = await Camera.requestCameraPermissionsAsync()
  // console.log(cameraPermissionResult, ">>>>>>>>>>>>>>>>")
    if (cameraPermissionResult.granted === false) {
        alert ('Permission to use camera is required!')
        return
      }
  
      setHaveCameraPermission("Yes")  
      
      console.log(">>>>>>>>>Hello!")

    }
    console.log(">>>>>>>>>Hello....2  !")

    
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
      console.log(permissionResult, " IMAGE PICK RESULT")
      
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!')
        return
      }
      
      let pickerResult = await ImagePicker.launchImageLibraryAsync()
      if (pickerResult.cancelled === true) {
        return
      }
      setCameraRollImage({ localUri: pickerResult.uri })
      
    }
    
    if (cameraRollImage.localUri !== ""){
      return (
        <View style={styles.container}>
          <Image
            source={{ uri: cameraRollImage.localUri }}
            style={styles.thumbnail}
            />
        <TouchableOpacity
          onPress={() => alert('Saved!')}
          style={styles.button}
          >

        <Text style={styles.buttonText}>Save chosen image</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (haveCameraPermission === "Yes") {
    console.log("Are we in the render of camera?")
     return (
         <View style={styles.cameraContainer}>
           
           <Camera style={styles.camera} type={type}>
             <View style={styles.buttonContainer}>
               <TouchableOpacity
                 style={styles.cameraButton}
                 onPress={() => {
                     setType(
                         type === Camera.Constants.Type.back
                           ? Camera.Constants.Type.front
                           : Camera.Constants.Type.back
                       );
                     }}>
                     <Text style={styles.text}> Flip </Text>
                   </TouchableOpacity>
                 </View>
               </Camera>
             </View>
           );

  }
  
  return (
    <View style={styles.container}>

      <Text >Add a plant to your collection!</Text>
      {/* <Image source={} style={} /> */}
      <Text>Push button to select from camera roll </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <Text> Push button to open camera</Text>
      <TouchableOpacity onPress={openCameraAsync} style={styles.button}>
        <Text style={styles.buttonText}>Take a photo</Text>
      </TouchableOpacity>
    </View>
  )

}


export default CameraScreen

// >>>>> Break >>>>>




//   const [hasPermission, setHasPermission] = useState("");
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
  //     (async () => {
    //       const { status } = await Camera.requestCameraPermissionsAsync();
    //       if (status === 'granted') setHasPermission("Granted");
    //     })();
    //   }, []);

    
    //   if (hasPermission === "false") {  // NB defunct atm
    //     return <Text>No access to camera</Text>;
    //   }
    //   return (
      //     <View style={styles.container}>
      //       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setType(
  //                 type === Camera.Constants.Type.back
  //                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={styles.text}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );