import React, { useEffect, useState } from "react";
import {Box, Button, SafeAreaView, ScrollView, Text, Image, ButtonIcon, FavouriteIcon, Icon, VStack, ChevronRightIcon, View, Heading} from '@gluestack-ui/themed';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPinned } from "lucide-react-native";
import { screen } from "../utils";
import {
    doc,
    onSnapshot,
    collection,
    query,
    where,
    orderBy,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    getDocs,
  } from "firebase/firestore";
  import { getAuth , onAuthStateChanged} from "firebase/auth";


const NotFoundPlaces = () => {

    const auth = getAuth();
    
    return (
        <VStack flex={1} backgroundColor="#EFEFEF">
        <SafeAreaView flex={1}>
            <ScrollView>
                {/* Card */}
                
                <Box mx={16} marginTop={16} my={16}>
                    <Heading>Ups, you dont have places in your list</Heading>
                    <Image w="100%" h={289} borderRadius={15} source={require("../../assets/notfoundfavorites.jpg")} alt={"favorites"}/>
                </Box>
            </ScrollView>
        </SafeAreaView>
    </VStack>

    );

}

export default NotFoundPlaces;