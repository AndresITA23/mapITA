import React, { useState } from "react";
import {View,Text,FormControl,Input,InputField,Button,ButtonText, FormControlError, FormControlHelper, FormControlHelperText, FormControlErrorText, AlertCircleIcon, FormControlErrorIcon, Spinner, Box, VStack, InputSlot, InputIcon,} from "@gluestack-ui/themed";
import Background_Login from "../../components/BackGround";

import { useFormik } from "formik";

import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {useNavigation} from "@react-navigation/native"
import {screen} from "../../utils"
import {initialValues, validationSchema} from "./RegisterForm.data";
import Toast from "react-native-toast-message";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        
        await createUserWithEmailAndPassword(
          auth, 
          formValue.email, 
          formValue.password
          );
          navigation.navigate(screen.account.login);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Registration error, try later"
        })
      }
    },
  });

  return (

    <View flex={1} backgroundColor="black">
    <Background_Login></Background_Login>
      <VStack
        mx="$8"
        my="$20"
        space="lg"
        alignItems="center"
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Box>
          <Text size="3xl" fontWeight="bold" color="white" textAlign="center">
            Register
          </Text>

          <FormControl
            marginTop={"$4"}
            isInvalid={false}
            size={"md"}
            isDisabled={false}
            isRequired={true}
          >
            {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Email</FormControlLabelText>
                        </FormControlLabel> */}
            <Input 
            borderRadius="$xl" 
            bgColor="white">
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
            size={"md"}
            isDisabled={false}
            isRequired={true}
          >
            {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Password</FormControlLabelText>
                        </FormControlLabel> */}
            <Input 
            borderRadius="$xl" 
            bgColor="white">
              <InputField
                fontWeight="$bold"
                onChangeText={(text) => formik.setFieldValue("password", text)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                backgroundColor="white"
              />
              <InputSlot pr="$3" onPress={handleState} backgroundColor="white">
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>

            <FormControlHelper>
              <FormControlHelperText color="red">
                {formik.errors.password}
              </FormControlHelperText>
            </FormControlHelper>
          </FormControl>

          <FormControl
            marginTop={"$4"}
            size={"md"}
            isDisabled={false}
            isRequired={true}
          >
            {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Repeat password</FormControlLabelText>
                        </FormControlLabel> */}
            <Input 
            borderRadius="$xl" 
            bgColor="white">
            <InputField
                fontWeight="$bold"
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                type={showPassword ? "text" : "password"}
                placeholder="Repeat Password"
                backgroundColor="white"
              />
              <InputSlot pr="$3" onPress={handleState} backgroundColor="white">
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>

            <FormControlHelper>
              <FormControlHelperText color="red">
                {formik.errors.repeatPassword}
              </FormControlHelperText>
            </FormControlHelper>
          </FormControl>

          <Button
            action={"primary"}
            variant={"link"}
            size={"md"}
            marginVertical={"$1"}
            isDisabled={false}
            marginTop={"$3"}
            onPress={() => navigation.navigate(screen.account.login)}
          >
            <ButtonText
              color="white"
              size="sm"
              fontWeight="$bold"
              paddingRight={"$7"}
            >
              Do you already have an account? Log in here
            </ButtonText>
          </Button>
          
        </Box>

        <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 16,
              alignItems: "center",
              width: 110,
            }}
            onPress={formik.handleSubmit}
          >
            <Text color="white" fontSize={18}>
              Register
            </Text>
          </TouchableOpacity>

      </VStack>
     
      </View>

  );
};
export default Register;
