import React from "react";
import { Text, Box, Button, ButtonText, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, ImageBackground, Input, InputField, VStack, View, AlertCircleIcon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import {screen} from "../../utils"
import Background_Login from "../../components/BackGround";

const Register = () => {

    const navigation = useNavigation();

    return <View
        flex={1}
        backgroundColor="black">
        <Background_Login></Background_Login>
            <VStack mx="$8"
                my="$20"
                space="lg"
                alignItems="center"
                style={{
                    justifyContent: "center",
                    flex: 1
                }}>
                <Box>
                    <Text size="3xl" fontWeight="bold" color='white' textAlign='center'>
                        Register
                    </Text>
                    
                    <FormControl isInvalid={false} size={"md"} isDisabled={false} isRequired={true} marginTop={"$5"}>
                        {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Full Name</FormControlLabelText>
                        </FormControlLabel> */}
                        <Input>
                            <InputField
                                type="text"
                                placeholder="Name"
                                bgColor='white'
                                borderRadius={'$xl'}
                                fontWeight="$bold"
                                />
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Name invalid.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <FormControl marginTop={"$4"} isInvalid={false} size={"md"} isDisabled={false} isRequired={true}>
                        {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Email</FormControlLabelText>
                        </FormControlLabel> */}
                        <Input>
                            <InputField
                                type="text"
                                placeholder="Email"
                                bgColor='white'
                                borderRadius={'$xl'} 
                                fontWeight="$bold"/>
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Email invalid.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <FormControl marginTop={"$4"} isInvalid={false} size={"md"} isDisabled={false} isRequired={true}>
                        {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Phone</FormControlLabelText>
                        </FormControlLabel> */}
                        <Input>
                            <InputField
                                type="text"
                                placeholder="Phone"
                                bgColor='white'
                                borderRadius={'$xl'} 
                                fontWeight="$bold"/>
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Phone invalid.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <FormControl marginTop={"$4"} size={"md"} isDisabled={false} isRequired={true}>
                        {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Password</FormControlLabelText>
                        </FormControlLabel> */}
                        <Input>
                            <InputField
                                type="password"
                                placeholder="Password"
                                bgColor='white'
                                borderRadius="$xl" 
                                fontWeight="$bold"/>
                        </Input>

                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Atleast 6 characters are required.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <FormControl marginTop={"$4"} size={"md"} isDisabled={false} isRequired={true}>
                        {/* <FormControlLabel>
                            <FormControlLabelText color='white'>Repeat password</FormControlLabelText>
                        </FormControlLabel> */}
                        <Input>
                            <InputField
                                type="password"
                                placeholder="Repeat password"
                                bgColor='white'
                                borderRadius="$xl" 
                                fontWeight="$bold"/>
                        </Input>

                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Atleast 6 characters are required.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <Button
                        action={"primary"}
                        variant={"link"}
                        size={"md"}
                        marginVertical={"$1"}
                        isDisabled={false}
                        marginTop={"$3"}
                        onPress={() => navigation.navigate(screen.account.login)}>
                        <ButtonText
                            color='white'
                            size="sm"
                            fontWeight="$bold"
                            paddingRight={"$7"}>
                            Do you already have an account? Log in here
                        </ButtonText>
                    </Button>
                </Box>

                <Button
                    action={"primary"}
                    variant={"solid"}
                    size={"md"}
                    isDisabled={false}
                    bg="$black"
                    w={"$48"}
                    borderRadius={"$2xl"}
                    onPress={() => navigation.navigate("Login")}
                    style={{
                        alignContent: "center"
                    }}>
                    <ButtonText>
                        Register
                    </ButtonText>
                </Button>
            </VStack>
    </View>
};

export default Register;