import { View, Text, Button, ButtonText, Avatar, AvatarImage, Image } from "@gluestack-ui/themed";
import React from "react";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions, TouchableOpacity } from "react-native";
import LoadingModal from "../../components/LoadingModal";

const PrimaryImagePlace = (props) => {
  const { formik } = props;

  const primaryImage = formik.values.images[0];

  return (
    <View>
      <Image 
      h={200}
      w={Dimensions.get("window").width}
      source={primaryImage ? {uri: primaryImage} 
      :require("../../../assets/Image-not-found.png") }

      ></Image>
    </View>
  );
};
export default PrimaryImagePlace;
