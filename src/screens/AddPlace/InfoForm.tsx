import React, { useState } from "react";
import {View,Box,Text,FormControl,Input,InputField,FormControlHelper,FormControlHelperText, VStack} from "@gluestack-ui/themed";
import MapForm  from './MapForm';
import { MapPinned } from "lucide-react-native";
import { TouchableOpacity } from "react-native";


const InfoForm = (props) => {
  const { formik } = props;

  const [showModal, setShowModal] = useState(false);

  const onOpenCloseMap = () => {
    setShowModal(!showModal); 
  };

  return (
    <>
    <VStack h={'$2/3'} marginBottom={'$1/4'}>
    <View>
      <FormControl
        marginTop={"$4"}
        isInvalid={false}
        size={"md"}
        isDisabled={false}
        isRequired={true}
      >
        <Input borderRadius="$xl" bgColor="white">
          <InputField
            type="text"
            placeholder="Name of the place"
            fontWeight="$bold"
            onChangeText={(text) => formik.setFieldValue("name", text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText color="red">
            {formik.errors.name}
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>
      <FormControl
        marginTop={"$4"}
        isInvalid={false}
        size={"md"}
        isDisabled={false}
        isRequired={true}
      >
        <Input borderRadius="$xl" bgColor="white">
          <InputField
            type="text"
            placeholder="Description"
            fontWeight="$bold"
            onChangeText={(text) => formik.setFieldValue("description", text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText color="red">
            {formik.errors.description}
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>

      

      <FormControl
        marginTop={"$4"}
        isInvalid={false}
        size={"md"}
        isDisabled={false}
        isRequired={true}
      >
        <Input borderRadius="$xl" bgColor="white">
          <InputField
            type="text"
            placeholder="Address"
            fontWeight="$bold"
            onChangeText={(text) => formik.setFieldValue("address", text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText color="red">
            {formik.errors.address}
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>

      

      <FormControl
        marginTop={"$4"}
        isInvalid={false}
        size={"md"}
        isDisabled={false}
        isRequired={true}
      >
        <Input borderRadius="$xl" bgColor="white">
          <InputField
            type="text"
            placeholder="Email"
            fontWeight="$bold"
            onChangeText={(text) => formik.setFieldValue("email", text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText color="red">
            {formik.errors.email}
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>

      <FormControl
        marginTop={"$4"}
        isInvalid={false}
        size={"md"}
        isDisabled={false}
        isRequired={true}
      >
        <Input borderRadius="$xl" bgColor="white">
          <InputField
            type="text"
            placeholder="Phone"
            fontWeight="$bold"
            onChangeText={(text) => formik.setFieldValue("phone", text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText color="red">
            {formik.errors.phone}
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>

      <TouchableOpacity onPress={onOpenCloseMap}>
        <MapPinned color={getColorIconMap(formik)}/> 
      </TouchableOpacity>

      </View>

      
      <MapForm show={showModal} close={() => setShowModal(false)} formik={formik}/>

    </VStack>
    </>
  );
};

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "#BFA27E";
  
  return "#c2c2c2"
}

export default InfoForm;
