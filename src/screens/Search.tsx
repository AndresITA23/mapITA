import { SafeAreaView, VStack, Text, Box, Image, ScrollView, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { SlidersHorizontal, X, Star } from "lucide-react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { screen } from "../utils";

const Search = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            animation: 'fade',
            headerTitleStyle: {
                fontSize: 20,
            },
            headerTitle: "Search",
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate(screen.explore.filtters)}>
                    <Box alignItems="center" justifyContent="center">
                        <SlidersHorizontal  color="rgba(64, 64, 64, 1)" size={24} />
                    </Box>
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Box alignItems="center" borderRadius={10} justifyContent="center">
                        <X color="rgba(64, 64, 64, 1)" size={24} />
                    </Box>
                </TouchableOpacity>
            ),
            headerSearchBarOptions: {
                placeholder: "Search...",
            },
        });
    }, [navigation]);

    return (
        <VStack flex={1}>
            <Box></Box>
            <SafeAreaView flex={1} >
                <ScrollView>

                    <Box mx={16} my={16}>
                        {/* Popular Places */}
                        <Box w="100%">
                            <Text fontSize={18} fontWeight="$bold">The most popular places</Text>
                        </Box>

                        {/* Card Popular Places */}
                        <ScrollView horizontal={true} p={8} pb={16} mx={-8}>
                            <HStack justifyContent='space-between'>
                                <TouchableOpacity style={{ marginRight: 16 }}>
                                    <Box w={280} h={260} mt={8} borderRadius={15} backgroundColor="white"
                                        style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
                                        <Box mx={16} my={16}>
                                            <Image w="100%" h={160} borderRadius={15} source={require("../../assets/PruebaImage.png")} />
                                        </Box>
                                        <Box mx={16} alignItems="center" flexDirection="row">
                                            <Text fontSize={16} fontWeight="$bold">Example Name</Text>
                                            <Box right={0} position="absolute" flexDirection="row" alignItems="center">
                                                <Star size={16} color="#5A5A5A" />
                                                <Text pl={2} fontSize={16} fontWeight="$normal" color="#5A5A5A">4.91</Text>
                                            </Box>
                                        </Box>
                                        <Box mx={16} bottom={16} position="absolute" >
                                            <Text fontWeight="$medium" fontSize={15}>Location DataBase • City</Text>
                                        </Box>
                                    </Box>
                                </TouchableOpacity>
                            </HStack>
                        </ScrollView>

                        {/* Recommended for you */}
                        <Box w="100%" mt={8}>
                            <Text fontSize={18} fontWeight="$bold">Recommended for you</Text>
                        </Box>

                        {/* Card Recommended for you */}
                        <Box>
                            <TouchableOpacity>
                                <Box w="100%" h={295} mt={16} borderRadius={15} backgroundColor="white"
                                    style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
                                    <Box mx={16} my={16}>
                                        <Image w="100%" h={186} borderRadius={15} source={require("../../assets/PruebaImage.png")} />
                                    </Box>
                                    <Box mx={16} alignItems="center" flexDirection="row">
                                        <Text fontSize={18} fontWeight="$bold">Example Name</Text>
                                        <Box right={0} position="absolute" flexDirection="row" alignItems="center">
                                            <Star size={18} color="#5A5A5A" />
                                            <Text pl={2} fontSize={18} fontWeight="$normal" color="#5A5A5A">4.91</Text>
                                        </Box>
                                    </Box>
                                    <Box mx={16} bottom={16} position="absolute" >
                                        <Text fontWeight="$medium" fontSize={18}>Location DataBase • City</Text>
                                    </Box>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </Box>

                </ScrollView>
            </SafeAreaView>
        </VStack>
    );
}

export default Search;