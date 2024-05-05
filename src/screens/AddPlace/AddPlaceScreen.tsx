import {View,Text,Button,ButtonText,} from "@gluestack-ui/themed";
import React from "react";
import InfoForm from "../AddPlace/InfoForm";
import UploadImagesForm from "./UploadImagesForm";
import { useFormik } from "formik";
import {initialValues, validationSchema } from './AddPlace.data';

const AddPlaceScreen = () => {

  const formik = useFormik ({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  });

  return (
    <View>
      <Text>Add Place</Text>
      <InfoForm formik={formik} ></InfoForm>

      <UploadImagesForm></UploadImagesForm>
      
      <Button
        action={"primary"}
        variant={"solid"}
        size={"lg"}
        isDisabled={false}
        onPress={formik.handleSubmit}
      >
      <ButtonText>Create place</ButtonText>
      </Button>
    </View>
  );
};
export default AddPlaceScreen;
