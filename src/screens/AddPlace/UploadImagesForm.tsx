import { View, Text, Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { v4 as uuid } from 'uuid';

const UploadImagesForm = (props) => {
  const { formik } = props;
  const [image, setImage] = useState(null);

  
  const pickImage = async () => {
    
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const uri = result.assets[0].uri; 
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `restaurants/${uuid()}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
        console.log(snapshot)
    });
  };

  return (
    <View>
      <Button
        action={"primary"}
        variant={"solid"}
        size={"lg"}
        isDisabled={false}
        onPress={pickImage}
      >
      <ButtonText>AddImage</ButtonText>
      </Button>
    </View>
  );
};
export default UploadImagesForm;
