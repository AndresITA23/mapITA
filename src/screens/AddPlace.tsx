import { VStack, Box, Heading, Text, FormControl, TextareaInput, Textarea } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { X } from "lucide-react-native";
import React, { useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./Settings";

const AddStack = createNativeStackNavigator();

const NamePlace = () => {
    const navigation = useNavigation();
    return (
        <VStack flex={0.9} backgroundColor="white">
            <Box mx={16} mt={38}>
                <Heading style={styles.headerText}>What is the name of your place?</Heading>
            </Box>
            <Box mx={16} my={16}>
                <FormControl>
                    <Textarea h={100} isReadOnly={false} isRequired={true} borderRadius={15} borderWidth={2}>
                        <TextareaInput fontSize={18} mx={16} my={10}maxLength={45} multiline={false} placeholder="Enter text here..." />
                    </Textarea>
                </FormControl>
            </Box>
            {/* Footer */}
            <Box w="100%" position="absolute" bottom={121} h={5} backgroundColor="#D9D9D9">
                <Box w="0%" h={5} bg="black" borderTopRightRadius={20} borderBottomEndRadius={20}></Box>
            </Box>
            <Box w="100%" h={120} position="absolute" bottom={0}>
                <Box position="absolute" top={20} right={24} >
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("DescriptionPlace")}>
                        <Text style={styles.buttonNextText}>Next</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </VStack>
    );
}

const DescriptionPlace = () => {
    const navigation = useNavigation();
    return (
        <VStack flex={0.9} backgroundColor="white">
            <Box mx={16} mt={38}>
                <Heading style={styles.headerText}>What description would you give to your place?</Heading>
            </Box>
            <Box mx={16} my={16}>
                <FormControl>
                    <Textarea h={300} isReadOnly={false} isRequired={true} borderRadius={15} borderWidth={2}>
                        <TextareaInput fontSize={18} mx={16} my={10}maxLength={45} multiline={false} placeholder="Enter text here..." />
                    </Textarea>
                </FormControl>
            </Box>
            {/* Footer */}
            <Box w="100%" position="absolute" bottom={121} h={5} backgroundColor="#D9D9D9">
                <Box w="20%" h={5} bg="black" borderTopRightRadius={20} borderBottomEndRadius={20}></Box>
            </Box>
            <Box w="100%" h={120} position="absolute" bottom={0}>
                <Box position="absolute" top={20} left={24}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonBackText}>Back</Text>
                    </TouchableOpacity>
                </Box>
                <Box position="absolute" top={20} right={24}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("FacilitiesPlace")}>
                        <Text style={styles.buttonNextText}>Next</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </VStack>
    );
}

const FacilitiesPlace = () => {
    const navigation = useNavigation();
    return (
        <VStack flex={1} backgroundColor="white">
            <Box mx={16} mt={38}>
                <Heading style={styles.headerText}>What facilities does your place have to offer?</Heading>
            </Box>
            {/* Footer */}
            <Box w="100%" position="absolute" bottom={121} h={5} backgroundColor="#D9D9D9">
                <Box w="40%" h={5} bg="black" borderTopRightRadius={20} borderBottomEndRadius={20}></Box>
            </Box>
            <Box w="100%" h={120} position="absolute" bottom={0}>
                <Box position="absolute" top={20} left={24}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonBackText}>Back</Text>
                    </TouchableOpacity>
                </Box>
                <Box position="absolute" top={20} right={24}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("AddressPlace")}>
                        <Text style={styles.buttonNextText}>Next</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </VStack>
    );
}

const AddressPlace = () => {
    const navigation = useNavigation();
    return (
        <VStack flex={1} backgroundColor="white">
            <Box mx={16} mt={38}>
                <Heading style={styles.headerText}>What is the address of the place?</Heading>
            </Box>
            {/* Footer */}
            <Box w="100%" position="absolute" bottom={121} h={5} backgroundColor="#D9D9D9">
                <Box w="60%" h={5} bg="black" borderTopRightRadius={20} borderBottomEndRadius={20}></Box>
            </Box>
            <Box w="100%" h={120} position="absolute" bottom={0}>
                <Box position="absolute" top={20} left={24}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonBackText}>Back</Text>
                    </TouchableOpacity>
                </Box>
                <Box position="absolute" top={20} right={24}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("TimePlace")}>
                        <Text style={styles.buttonNextText}>Next</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </VStack>
    );
}

const TimePlace = () => {
    const navigation = useNavigation();
    return (
        <VStack flex={1} backgroundColor="white">
            <Box mx={16} mt={38}>
                <Heading style={styles.headerText}>What hours does your place have?</Heading>
            </Box>
            {/* Footer */}
            <Box w="100%" position="absolute" bottom={121} h={5} backgroundColor="#D9D9D9">
                <Box w="$80" h={5} bg="black" borderTopRightRadius={20} borderBottomEndRadius={20}></Box>
            </Box>
            <Box w="100%" h={120} position="absolute" bottom={0}>
                <Box position="absolute" top={20} left={24}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonBackText}>Back</Text>
                    </TouchableOpacity>
                </Box>
                <Box position="absolute" top={20} right={24}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("CapacityPlace")}>
                        <Text style={styles.buttonNextText}>Next</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </VStack>
    );
}

const CapacityPlace = () => {
    const navigation = useNavigation();
    return (
        <VStack flex={1} backgroundColor="white">
            <Box mx={16} mt={38}>
                <Heading style={styles.headerText}>What is the capacity of your place?</Heading>
            </Box>
            {/* Footer */}
            <Box w="100%" position="absolute" bottom={121} h={5} backgroundColor="#D9D9D9">
                <Box w="100%" h={5} bg="black" borderTopRightRadius={20} borderBottomEndRadius={20}></Box>
            </Box>
            <Box w="100%" h={120} position="absolute" bottom={0} >
                <Box position="absolute" top={20} left={24}>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonBackText}>Back</Text>
                    </TouchableOpacity>
                </Box>
                <Box position="absolute" top={20} right={24}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate("Settings")}>
                        <Text style={styles.buttonNextText}>Save</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </VStack>
    );
}

const AddPlace = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            animation: 'fade',
            headerTitleStyle: {
                fontSize: 18,

            },
            headerStyle: {
                borderColor: "red",
                borderWidth: 2,
            },
            headerTitle: "Add your place",
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Box alignItems="center" borderRadius={10} justifyContent="center">
                        <X color="rgba(64, 64, 64, 1)" size={22} />
                    </Box>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <AddStack.Navigator initialRouteName="NamePlace">
            <AddStack.Screen name="NamePlace" component={NamePlace} options={{ animation: 'fade', presentation: 'containedTransparentModal', headerShown: false }} />
            <AddStack.Screen name="DescriptionPlace" component={DescriptionPlace} options={{ animation: 'fade', presentation: 'containedTransparentModal', headerShown: false }} />
            <AddStack.Screen name="FacilitiesPlace" component={FacilitiesPlace} options={{ animation: 'fade', presentation: 'containedTransparentModal', headerShown: false }} />
            <AddStack.Screen name="AddressPlace" component={AddressPlace} options={{ animation: 'fade', presentation: 'containedTransparentModal', headerShown: false }} />
            <AddStack.Screen name="TimePlace" component={TimePlace} options={{ animation: 'fade', presentation: 'containedTransparentModal', headerShown: false }} />
            <AddStack.Screen name="CapacityPlace" component={CapacityPlace} options={{ animation: 'fade', presentation: 'containedTransparentModal', headerShown: false }} />
        </AddStack.Navigator>
    );
}


const styles = StyleSheet.create({

    headerText: {
        fontSize: 28,
        fontWeight: "600",
        color: "black",
        lineHeight: 38,
    },
    buttonNext: {
        backgroundColor: "#BFA27E",
        height: 50,
        borderRadius: 30,
        paddingHorizontal: 50,
        justifyContent: "center",
    },
    buttonBack: {
        height: 50,

        paddingHorizontal: 16,
        justifyContent: "center",
    },
    buttonNextText: {
        color: "white",
        fontSize: 18,
        fontWeight: "500",
    },
    buttonBackText: {
        color: "black",
        fontSize: 18,
        fontWeight: "500",
        textDecorationLine: 'underline',
    }
});

export default AddPlace;