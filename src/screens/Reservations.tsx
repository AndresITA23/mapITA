import React from "react";
import { Box, Image, Text, Icon, Heading, ScrollView, VStack, ChevronRightIcon, AlertCircleIcon, CheckCircleIcon } from "@gluestack-ui/themed";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MapPinned } from "lucide-react-native";
import { screen } from "../utils";

const Tab = createMaterialTopTabNavigator();

const NotFund = () => {
    return <VStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#EFEFEF">
        <Text>Bookings not found</Text>
    </VStack>
}

const Pending = () => {  
    const navigation = useNavigation(); 
    const handlePublication = () => {
        navigation.navigate(screen.reservations.publicationRes);
      }

    return <VStack flex={1}>
        <ScrollView my={16}>
            {/* Card */}
            <Box mx={16} marginTop={0} my={16}>
                <Image w="100%" h={294} borderRadius={15} source={require("../../assets/Cabañabonita.jpg")} />

                {/* Note/IconPending */}
                <Box p={7} alignItems="center" justifyContent="center" position="absolute" borderRadius={20} bgColor="white" my={16} left={16} opacity="$90">
                    <Text fontSize={11} fontWeight="$bold" color="red">Your reservation is pending...</Text>
                </Box>

                <Box w={29} h={29} position="absolute" justifyContent="center" alignItems="center" borderRadius={999} bgColor="white" my={16} right={16} opacity="$90">
                    <Icon w={32} h={32} as={AlertCircleIcon} color="red" />
                </Box>

                {/* Main Content Card */}
                <Box w="100%" bottom={0} borderRadius={15} backgroundColor="white" position="absolute" opacity="$90"
                    style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>

                    {/* Header/Icon */}
                    {/* onPress={() => navigation.navigate("Publication")} */}
                    <TouchableOpacity style={{paddingHorizontal:16, paddingVertical:16}} onPress={handlePublication}>

                        <Box flexDirection="row">
                            <Text color="#525252" fontSize={22} fontWeight="$semibold">ExampleName</Text>
                            <Icon w={24} h={24} position="absolute" right={0} as={ChevronRightIcon} />
                        </Box>

                        {/* Location/Icon/Text */}
                        <Box mt={6} flexDirection="row">
                            <MapPinned size={24} color="#525252" />
                            <Text top={3} ml={5} fontWeight="$semibold" fontSize={14}> BaseDate - Direction Map</Text>
                        </Box>

                        {/* Price/Date/Hour */}
                        <Box mt={6} flexDirection="row" alignContent="center">
                            <Box >
                                <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">Total: </Text>
                                <Box flexDirection="row">
                                    <Text  fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN $2000</Text>
                                    <Text fontSize={13} mt={1}>/night</Text>
                                </Box>
                            </Box>
                            <Box position="absolute" right={0}>
                                <Box flexDirection="row">
                                    <Text ml={6} fontSize={14} fontWeight="$medium">Date:</Text>
                                    <Text ml={6} fontSize={12} marginTop={2} fontWeight="$normal">03 April 2024</Text>
                                </Box>

                                <Box flexDirection="row" mt={5}>
                                    <Text ml={6} fontSize={14} fontWeight="$medium">Hour:</Text>
                                    <Text ml={6} fontSize={12} marginTop={2} fontWeight="$normal">10:00am - 10:00pm</Text>
                                </Box>

                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
        </ScrollView>
    </VStack>
}

const Upcoming = () => {
    const navigation = useNavigation(); 
    const handlePublication = () => {
        navigation.navigate(screen.reservations.publicationRes);
      }
      
    return <VStack flex={1}>
        <ScrollView my={16}>
            {/* Card */}
            <Box mx={16} marginTop={0} my={16}>
                <Image w="100%" h={294} borderRadius={15} source={require("../../assets/Cabañabonita.jpg")} />

                {/* Note/IconPending */}
                <Box p={7} alignItems="center" justifyContent="center" position="absolute" borderRadius={20} bgColor="white" my={16} left={16} opacity="$90">
                    <Text fontSize={11} fontWeight="$bold" color="green">Your reservation is in 3 days...</Text>
                </Box>

                <Box w={29} h={29} position="absolute" alignItems="center" justifyContent="center" borderRadius={999} bgColor="white" my={16} right={16} opacity="$90">
                    <Icon w={32} h={32} as={CheckCircleIcon} color="green"></Icon>
                </Box>

                {/* Main Content Card */}
                <Box w="100%" bottom={0} borderRadius={15} backgroundColor="white" position="absolute" opacity="$90"
                    style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>

                    {/* Header/Icon */}
                    <TouchableOpacity style={{paddingHorizontal:16, paddingVertical:16}} onPress={handlePublication}>

                        <Box flexDirection="row">
                            <Text color="#525252" fontSize={22} fontWeight="$semibold">ExampleName</Text>
                            <Icon w={24} h={24} position="absolute" right={0} as={ChevronRightIcon} />
                        </Box>

                        {/* Location/Icon/Text */}
                        <Box mt={6} flexDirection="row">
                            <MapPinned size={24} color="#525252" />
                            <Text top={3} ml={5} fontWeight="$semibold" fontSize={14}> BaseDate - Direction Map</Text>
                        </Box>

                        {/* Price/Date/Hour */}
                        <Box mt={6} flexDirection="row" alignContent="center">
                            <Box >
                                <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">Total: </Text>
                                <Box flexDirection="row">
                                    <Text  fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN $2000</Text>
                                    <Text fontSize={13} mt={1}>/night</Text>
                                </Box>
                            </Box>
                            <Box position="absolute" right={0}>
                                <Box flexDirection="row">
                                    <Text ml={6} fontSize={14} fontWeight="$medium">Date:</Text>
                                    <Text ml={6} fontSize={12} marginTop={2} fontWeight="$normal">03 April 2024</Text>
                                </Box>

                                <Box flexDirection="row" mt={5}>
                                    <Text ml={6} fontSize={14} fontWeight="$medium">Hour:</Text>
                                    <Text ml={6} fontSize={12} marginTop={2} fontWeight="$normal">10:00am - 10:00pm</Text>
                                </Box>

                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
        </ScrollView>
    </VStack>
}

const Reservations = () => {
    return (
        <VStack flex={1} backgroundColor="#EFEFEF">
            {/* Header */}
            <Box w="100%" h={144} backgroundColor="#FFF">
                <Box mx={16} bottom={8} position="absolute">
                    <Heading fontSize={34}>Reservation</Heading>
                </Box>
            </Box>
            <Tab.Navigator>
                <Tab.Screen name="Pending" component={Pending} />
                <Tab.Screen name="Upcoming" component={Upcoming} />
            </Tab.Navigator>

        </VStack>
    );
}

export default Reservations;