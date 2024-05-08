import React, { useState, useEffect } from "react";
import { View, FormControl, FormControlError, FormControlHelper, FormControlHelperText, FormControlErrorText, FormControlErrorIcon, Spinner, Box, InputSlot, InputIcon, } from "@gluestack-ui/themed";
import { Text, Image, Button, ButtonText, FormControlLabelText, ImageBackground, Input, InputField, VStack, AlertCircleIcon } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import Background_Login from "../../components/BackGround";

import { useFormik } from "formik";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import { screen } from "../../utils"
import { initialValues, validationSchema } from "./RegisterForm.data";
import Toast from "react-native-toast-message";
import { EyeIcon, EyeOffIcon, CircleUserRound, Mail, Phone, UserRound } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register2 = () => {
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

        const infoUser = await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        ).then((userFirebase) => {
          return userFirebase;
        });

        console.log(infoUser);

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

  const [fontsLoaded] = useFonts({
    "Shalimar-Regular": require("../../../assets/fonts/Shalimar-Regular.ttf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <VStack flex={1}>
      <ImageBackground
        source={require("../../../assets/Gif6.png")}
        style={{
          flex: 1,
        }}
        blurRadius={6}>
        <Box flex={1} position="relative" justifyContent="center" bgColor="rgba(0,0,0,0.25)">
          {/* LogoText */}
          <Box alignItems="center" top={96} right={0} left={0} position="absolute">
            <Image w={90} h={90} source={require("../../../assets/LogCabin.png")} />
            <Text fontSize={64} style={{ fontFamily: "Shalimar-Regular" }} color="white">Cabapp</Text>
          </Box>

          <Box mx={16} mt={30}>
            {/* LoginText */}
            <Box>
              <Box my={16}>
                <Text w="100%" fontSize={30} fontWeight="$normal" color='white' position="absolute" left={6}>
                  Register
                </Text>
              </Box>

              {/* Form/Email/Password */}
              <Box mt={32}>
                {/* Form Email */}
                <Box my={16} mt={0}>
                  <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true}>
                    <Input w="100%" h={50} $focus-borderColor="#BFA27E" borderRadius={30} bgColor="rgba(0,0,0,0.4)" borderWidth={2}>
                      <InputField type="text" fontSize={18} pl={24} pr={50} fontWeight="$normal" placeholder="Email" color="white" borderRadius={30}
                        onChangeText={(text) => formik.setFieldValue("email", text)} />
                    </Input>
                    <Box h={50} position="absolute" justifyContent="center" right={22}>
                      <Mail width={20} height={20} color="white" />
                    </Box>

                    <FormControlHelper>
                      <FormControlHelperText color="red">
                        {formik.errors.email}
                      </FormControlHelperText>
                    </FormControlHelper>
                  </FormControl>
                </Box>

                {/* From Password */}
                <Box my={16} mt={-10}>
                  <FormControl size={"md"} isDisabled={false} isRequired={true}>
                    <Input w="100%" h={50} $focus-borderColor="#BFA27E" borderRadius={30} bg="rgba(0,0,0,0.4)" borderWidth="$2">
                      <InputField type={showPassword ? "text" : "password"} pl={24} pr={16} fontSize={18} fontWeight="$normal" color="white" placeholder="Password"  borderRadius={30}
                        onChangeText={(text) => formik.setFieldValue("password", text)} />
                      <InputSlot pr={22} onPress={handleState}>
                        <InputIcon
                          as={showPassword ? EyeIcon : EyeOffIcon}
                          color="white"
                        />
                      </InputSlot>
                    </Input>

                    <FormControlHelper>
                      <FormControlHelperText color="red">
                        {formik.errors.password}
                      </FormControlHelperText>
                    </FormControlHelper>
                  </FormControl>
                </Box>

                {/* From repeat Password */}
                <Box my={16} mt={-10}>
                  <FormControl size={"md"} isDisabled={false} isRequired={true}>
                    <Input w="100%" h={50} $focus-borderColor="#BFA27E" borderRadius={30} bg="rgba(0,0,0,0.4)" borderWidth="$2">
                      <InputField type={showPassword ? "text" : "password"} pl={24} pr={16} fontSize={18} fontWeight="$normal" color="white" placeholder="Repeat password" borderRadius={30}
                        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)} />
                      <InputSlot pr={22} onPress={handleState}>
                        <InputIcon
                          as={showPassword ? EyeIcon : EyeOffIcon}
                          color="white"
                        />
                      </InputSlot>
                    </Input>     

                    <FormControlHelper>
                      <FormControlHelperText color="red">
                        {formik.errors.repeatPassword}
                      </FormControlHelperText>
                    </FormControlHelper>
                  </FormControl>
                </Box>
              </Box>

              {/* ButtonRegister */}
              <Box mt={-16} alignItems="center">
                <TouchableOpacity style={{ width: "100%", height: 50, marginTop: 16, borderRadius: 40, backgroundColor: "rgba(255,255,255,0.9)", justifyContent: "center", alignItems: "center"}}
                onPress={formik.handleSubmit}>
                  <Text fontSize={19} fontWeight="$normal" color="black">
                    Register
                  </Text>
                </TouchableOpacity>
              </Box>

            </Box>
          </Box>

          {/* ButtonLinkSignUp */}
          <Box position="absolute" marginVertical={24} left={0} right={0} bottom={16} alignItems="center" justifyContent="center">
            <Button variant="link" flexDirection="row" onPress={() => navigation.navigate(screen.account.login)}>
              <ButtonText fontSize={16} color="white">Do you have an account? </ButtonText>
              <ButtonText fontSize={16} color="white" fontWeight="$bold">Login!</ButtonText>
            </Button>
          </Box>
        </Box>
      </ImageBackground>
    </VStack>
  );
}

export default Register2;
