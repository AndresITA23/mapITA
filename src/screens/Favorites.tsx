import React, { useEffect } from "react";
import {Box, Button, SafeAreaView, ScrollView, Text, Image, ButtonIcon, FavouriteIcon, Icon, VStack, ChevronRightIcon} from '@gluestack-ui/themed';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPinned } from "lucide-react-native";
import { screen } from "../utils";

const Favorites = () => {
    const navigation = useNavigation();

    const handlePublication = () => {
        navigation.navigate(screen.favorites.publicationFav);
      }

    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle:true,
            headerTitle: "Favorites",
            headerSearchBarOptions: {
                placeholder: "Search in your favorites...",
            }
        });
    });
    
    return (
        <VStack flex={1} backgroundColor="#EFEFEF">
        <SafeAreaView flex={1}>
            <ScrollView>
                {/* Card */}
                <Box mx={16} marginTop={16} my={16}>
                    <Image w="100%" h={289} borderRadius={15} source={require("../../assets/Cabañabonita.jpg")} />

                    <Button w={40} h={40} padding={10} position="absolute" borderRadius={999} bgColor="white" my={16} right={16} opacity="$90">
                        <ButtonIcon w={24} h={24} as={FavouriteIcon} color="red"></ButtonIcon>
                    </Button>

                    {/* Main Content Card */}
                    <Box w="100%"  bottom={0} borderRadius={15} backgroundColor="rgba(255,255,255,0.85)" position="absolute"
                        style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
                        {/* Header/Icon */}
                        <TouchableOpacity style={{padding:16}} onPress={handlePublication}>
                            <Box flexDirection="row">
                                <Text fontSize={22} color="#525252" fontWeight="$semibold">ExampleName</Text>
                                <Icon w={24} h={24} top={5} position="absolute" right={0} as={ChevronRightIcon} />
                            </Box>

                            {/* Icon/Text */}
                            <Box mt={10} flexDirection="row" alignItems="center">
                                <MapPinned size={24} color="#666666" />
                                <Text  ml={5} fontWeight="$semibold" fontSize={14}> BaseDate - Direction Map</Text>
                            </Box>

                            {/* Price/Starts */}
                            <Box mt={10} flexDirection="row">
                                <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN $2000</Text>
                                <Text ml={6} top={2} fontSize={14} fontWeight="$normal">promedio por noche</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ScrollView>
        </SafeAreaView>
    </VStack>
    );

}

export default Favorites;