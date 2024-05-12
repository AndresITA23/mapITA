import { ButtonText, FormControlHelper, FormControlHelperText, InputIcon, InputSlot, VStack, View, Image, ImageBackground } from "@gluestack-ui/themed";
import * as React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Box, Heading, Text } from "@gluestack-ui/themed";
import { FormControl, Input, InputField, } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Background_Login from "../../components/BackGround";
import { TouchableOpacity } from "react-native";
import { EyeIcon, EyeOffIcon, Mail } from "lucide-react-native";
import { screen } from "../../utils";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./LoginForm.data";


const Login2 = () => {
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

          <Box mx={16} my={30}>
            {/* LoginText */}
            <Box>
              <Box my={16}>
                <Text w="100%" fontSize={30} fontWeight="$normal" color='white' position="absolute" left={6}>
                  Login
                </Text>
              </Box>

              {/* Form/Email/Password */}
              <Box mt={32}>
                {/* Form Email */}
                <Box my={16} mt={0}>
                  <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true}>
                    <Input w="100%" h={50} borderRadius={30} $focus-borderColor="#BFA27E" paddingLeft={10} paddingRight={36} bgColor="rgba(0,0,0,0.4)" borderWidth={2}>
                      <InputField
                        type="text"
                        color="white"
                        placeholder="Email"
                        fontWeight="$normal"
                        onChangeText={(text) => formik.setFieldValue("email", text)}
                      />
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
                    <Input w="100%" h={50} borderRadius={30} $focus-borderColor="#BFA27E" paddingHorizontal={10} bg="rgba(0,0,0,0.4)" borderWidth="$2">
                      <InputField
                        fontWeight="$normal"
                        color="white"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChangeText={(text) => formik.setFieldValue("password", text)}
                      />
                      <InputSlot pr="$3" onPress={handleState}>
                        <InputIcon
                          as={showPassword ? EyeIcon : EyeOffIcon}
                          color="white"
                        />
                      </InputSlot>
                    </Input>
                    {/* <Box h={50} position="absolute" justifyContent="center" right={22}>
                      <EyeOffIcon width={20} height={20} color="white" />
                    </Box> */}

                    <FormControlHelper>
                      <FormControlHelperText color="red" >
                        {formik.errors.password}
                      </FormControlHelperText>
                    </FormControlHelper>
                  </FormControl>
                </Box>
              </Box>

              {/* ButtonLink/ForgotPassword */}
              <Box my={16} mt={-24}>
                <Button position="absolute" right={0} variant={"link"} alignItems="center">
                  <ButtonText
                    color='white'
                    fontSize={14}
                    fontWeight="$medium">
                    Forgot password?
                  </ButtonText>
                </Button>
              </Box>

              {/* ButtonLogin */}
              <Box my={16} alignItems="center">
                <TouchableOpacity style={{ width: "100%", height: 50, marginTop: 16, borderRadius: 40, backgroundColor: "rgba(0,0,0,0.9)", justifyContent: "center", alignItems: "center" }}
                  onPress={formik.handleSubmit}>
                  <Text fontSize={18} fontWeight="$normal" color="white">
                    Login
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>

          {/* ButtonLinkSignUp */}
          <Box position="absolute" marginVertical={24} left={0} right={0} bottom={16} alignItems="center" justifyContent="center">
            <Button variant="link" flexDirection="row" onPress={goToRegister}>
              <ButtonText fontSize={16} color="white">Don’t have an account? </ButtonText>
              <ButtonText fontSize={16} color="white" fontWeight="$bold">Sign Up</ButtonText>
            </Button>
          </Box>
        </Box>
      </ImageBackground>
    </VStack>
  );
}

export default Login2;
