import { ButtonText, FormControlHelper, FormControlHelperText, InputIcon, InputSlot, VStack, View } from "@gluestack-ui/themed";
import * as React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Box, Heading, Text } from "@gluestack-ui/themed";
import {FormControl,Input,InputField,} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Background_Login from "../../components/BackGround";
import { TouchableOpacity } from "react-native";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { screen } from "../../utils";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./LoginForm.data";

const Login = () => {
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
        await signInWithEmailAndPassword(
          auth, 
          formValue.email, 
          formValue.password
          );
          navigation.navigate(screen.explore.tab);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Incorrect Email or password, try later"
        })
      }
    },
  });

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  const onSubmit = () => {
    navigation.navigate(screen.account.register);
  };

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
            Login
          </Text>     

          <FormControl
            marginTop={"$4"}
            isInvalid={false}
            size={"md"}
            isDisabled={false}
            isRequired={true}
          >
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
            <Input 
            borderRadius="$xl" 
            bgColor="white">
              <InputField
                fontWeight="$bold"
                backgroundColor="white"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChangeText={(text) => formik.setFieldValue("password", text)}
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

          <Button
            action={"primary"}
            variant={"link"}
            size={"md"}
            isDisabled={false}
          >
            <ButtonText color="white" onPress={goToRegister}>
              Don't have an account? Sign up here
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
              Login
            </Text>
          </TouchableOpacity>

      </VStack>
    </View>
  );
};

export default Login;
