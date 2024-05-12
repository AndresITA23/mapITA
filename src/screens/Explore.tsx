import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, Button, Image, Text, Box, Heading, VStack, Icon, ChevronRightIcon, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Animated, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import { Search, Heart, MapPin, ChevronDownIcon, MapPinned } from 'lucide-react-native';
import ListPlaces from '../components/ListPlaces';

import { screen, db } from "../utils";

const Explore = (props) => {
  const navigation = useNavigation();

  const [places, setPlaces] = useState(null); 

  useEffect(() => {
    const q = query(
      collection(db, "places"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      const placesData = snapshot.docs.map((doc) => doc.data());
      setPlaces(placesData);
    });
  }, []);

  const handleAddPlacePress = () => {
    navigation.navigate(screen.explore.addPlace);
  };

  const handlePublication = () => {
    navigation.navigate(screen.explore.publicationExp);
  }

  const scrollY = useRef(new Animated.Value(0)).current;
  const headerTranslateY = Animated.diffClamp(scrollY, 0, 144).interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  const headerOpacity = Animated.diffClamp(scrollY, 0, 144).interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  return (
    <VStack flex={1} backgroundColor="#EFEFEF">

      <Animated.View
        style={{
          backgroundColor: "#FFF",
          transform: [{ translateY: headerTranslateY }],
          opacity: headerOpacity,
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Header */}
        <Box backgroundColor="#FFF">
          <Box mx={16} width="100%" h={144}>
            {/* Location/Icon */}
            <Box w="100%" position="absolute" top={65}>
              <TouchableOpacity>
                <Box flexDirection="row" alignItems="center">

                  <MapPin width={25} height={25} color="#BFA27E" />
                  <Text fontWeight="$medium" pl={5} >BaseDate-Location</Text>
                  <Icon left={5} size="xl" as={ChevronDownIcon} />

                </Box>
              </TouchableOpacity>
            </Box>

            <Box position="absolute" bottom={0} left={0}>
              <Heading fontSize={34}>Welcome</Heading>
            </Box>
          </Box>

          {/* Search/Filtter */}
          <Box w="100%" my={16}>
            <Box mx={16}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Search")}
                style={{
                  backgroundColor: "#EFEFEF", alignItems: "center",
                  borderRadius: 999, borderWidth: 0.3, borderColor: "#B9B9B9", padding: 10, flexDirection: "row"
                }}>
                <Search width={22} height={22} color="black" />
                <Text pl="$2" color="#4A4A4A">Where are you looking?...</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </Animated.View>

      {/* Card */}
      <SafeAreaView flex={1}>
        <Animated.ScrollView onScroll={handleScroll}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{ paddingTop: 174 }}>

          <ListPlaces places={places}></ListPlaces>

          {/* This is the component for the place */}
          {/* <Box my={16} mx={16} h={450} borderRadius={30}>
            <Image w="100%" h={335} borderRadius={30} source={require("../../assets/Cabañabonita.jpg")} />

            <Box h={45} w={45} alignItems="center" justifyContent="center" opacity="$90" position='absolute' borderRadius={999} bgColor="white" right={16} top={16}>
              <Heart color="#222222" size={24} />
            </Box>

            <Box w="100%" bottom={0} position="absolute" borderRadius={30} backgroundColor="white"
              style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
              
              <TouchableOpacity style={{padding:16}} onPress={handlePublication}>
                <Box flexDirection="row">
                  <Heading color="#525252" fontSize={24} fontWeight="$semibold">ExampleName</Heading>
                  <Icon w={24} h={24} mt={5} as={ChevronRightIcon} position="absolute" right={0} />
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontSize={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula neque quam, vitae posuere tortor scelerisque ac. In hac habitasse platea dictumst.</Text>
                </Box>

                <Box mt={10} flexDirection="row" alignItems="center">
                  <MapPinned size={18} color="#525252" />
                  <Text ml={5} fontWeight="$medium" fontSize={12}> BaseDate - Direction Map</Text>
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN $2000</Text>
                  <Text ml={6} top={2} fontSize={14}>promedio por noche</Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box> */}



          {/* <Box my={16} mx={16} mt={0} h={450} borderRadius={30}>
            <Image w="100%" h={335} borderRadius={30} source={require("../../assets/Cabañabonita.jpg")} />

            <Box h={45} w={45} alignItems="center" justifyContent="center" opacity="$90" position='absolute' borderRadius={999} bgColor="white" right={16} top={16}>
              <Heart color="#222222" size={24} />
            </Box>

            <Box w="100%" bottom={0} position="absolute" borderRadius={30} backgroundColor="white"
              style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
              
              <TouchableOpacity style={{padding:16}} onPress={handlePublication}>
                <Box flexDirection="row">
                  <Heading color="#525252" fontSize={24} fontWeight="$semibold">ExampleName</Heading>
                  <Icon w={24} h={24} mt={5} as={ChevronRightIcon} position="absolute" right={0} />
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontSize={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula neque quam, vitae posuere tortor scelerisque ac. In hac habitasse platea dictumst.</Text>
                </Box>

                <Box mt={10} flexDirection="row" alignItems="center">
                  <MapPinned size={18} color="#525252" />
                  <Text ml={5} fontWeight="$medium" fontSize={12}> BaseDate - Direction Map</Text>
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN $2000</Text>
                  <Text ml={6} top={2} fontSize={14}>promedio por noche</Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box> */}

          {/* <Box my={16} mx={16} mt={0} h={450} borderRadius={30}>
            <Image w="100%" h={335} borderRadius={30} source={require("../../assets/Cabañabonita.jpg")} />

            <Box h={45} w={45} alignItems="center" justifyContent="center" opacity="$90" position='absolute' borderRadius={999} bgColor="white" right={16} top={16}>
              <Heart color="#222222" size={24} />
            </Box>

            <Box w="100%" bottom={0} position="absolute" borderRadius={30} backgroundColor="white"
              style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
              
              <TouchableOpacity style={{padding:16}} onPress={handlePublication}>
                <Box flexDirection="row">
                  <Heading color="#525252" fontSize={24} fontWeight="$semibold">ExampleName</Heading>
                  <Icon w={24} h={24} mt={5} as={ChevronRightIcon} position="absolute" right={0} />
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontSize={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula neque quam, vitae posuere tortor scelerisque ac. In hac habitasse platea dictumst.</Text>
                </Box>

                <Box mt={10} flexDirection="row" alignItems="center">
                  <MapPinned size={18} color="#525252" />
                  <Text ml={5} fontWeight="$medium" fontSize={12}> BaseDate - Direction Map</Text>
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN $2000</Text>
                  <Text ml={6} top={2} fontSize={14}>promedio por noche</Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box> */}

          <Button
            w={"$72"}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            px={"$0"}
            mb={54}
            onPress={handleAddPlacePress}
          >
            <Text>Add place</Text>
          </Button>
        </Animated.ScrollView>
      </SafeAreaView>
    </VStack>

  );
};

export default Explore;
