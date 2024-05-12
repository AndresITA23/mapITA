import {
  View,
  Text,
  Button,
  ButtonText,
  Avatar,
  AvatarImage,
  Image,
  Box,
} from "@gluestack-ui/themed";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import LoadingModal from "../../components/LoadingModal";

const UploadImagesForm = (props) => {
  const { formik } = props;

  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `places/${uuid()}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotosRestaurant(snapshot.metadata.fullPath);
    });
  };

  const updatePhotosRestaurant = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);

    formik.setFieldValue("images", [...formik.values.images, imageUrl]);

    setIsLoading(false);
  };

  return (
    <>
      <View>
        <Box mx={16} my={16} marginTop={5}>
          <Text color="#000000" fontSize={18} fontWeight="$semibold">
            Add images
          </Text>
          <Box marginTop={15}>
            <TouchableOpacity onPress={pickImage}>
              <MaterialCommunityIcons
                name="camera-burst"
                size={64}
                color="gray"
              />
            </TouchableOpacity>
            {formik.errors.images && ( 
        <View>
          <Text color="red">{formik.errors.images}</Text>
        </View>
      )}
          </Box>
        </Box>
      </View>
      

      {isLoading && (
        <LoadingModal show={isLoading} text="Uploading image"></LoadingModal>
      )}
    </>
  );
};
export default UploadImagesForm;
