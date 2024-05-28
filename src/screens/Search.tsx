import {
  SafeAreaView,
  VStack,
  Text,
  Box,
  Image,
  ScrollView,
  HStack,
  onChange,
  Heading,
  FormControl,
  Input,
  InputField,
  View,
  Icon,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { SlidersHorizontal, X, Star, ChevronRightIcon, MapPinned } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { screen } from "../utils";
import { FontAwesome } from "@expo/vector-icons";
import {collection, query, startAt, endAt, limit, orderBy, getDocs } from 'firebase/firestore';
import {db} from '../utils';
import { size, map } from "lodash";

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = useState(null);

  

  React.useLayoutEffect(() => {
    navigation.setOptions({
      animation: "fade",
      headerTitleStyle: {
        fontSize: 20,
      },
      headerTitle: "Search",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box alignItems="center" borderRadius={10} justifyContent="center">
            <X color="rgba(64, 64, 64, 1)" size={24} />
          </Box>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect (() => {
    (async () => {
        const q = query(
            collection(db, "places"),
            orderBy("name"),
            startAt(searchText),
            endAt(`${searchText}\uf8ff`),
            limit(20)
        )
        const querySnapshot = await getDocs(q)
        setSearchResults(querySnapshot.docs)
    })()
  }, [searchText])

  const goToPublication = (id) => {
    navigation.navigate(screen.explore.tab, {
      screen: screen.explore.publicationExp,
      params: {
        id: id,
      },
    });
  };

  return (
    <VStack flex={1}>
      <SafeAreaView flex={1}>
        <ScrollView>
          <Box mx={16} my={16}>

              
              <FormControl
                marginTop={"$4"}
                isInvalid={false}
                size={"md"}
                isDisabled={false}
                isRequired={true}
              >
                <Input borderRadius="$xl" bgColor="white">
                <FontAwesome name="search" size={22} color="gray" style={{left: 8, top: 6 }}/>
                  <InputField
                    marginLeft={6}
                    type="text"
                    placeholder="Search"
                    fontWeight="$bold"
                    onChangeText={(text) => setSearchText(text)}
                  />
                </Input>
              </FormControl>
 
          </Box>

          {size(searchResults) === 0 ? (
            <View alignItems="center" marginTop={20}>
                <Heading>No places found</Heading>
            </View>
          ): (
            map(searchResults, (item) => {
                const data = item.data();
                return (
                    <>
              <Box mx={16} marginTop={16} my={16}>
                <Image
                  w="100%"
                  h={289}
                  borderRadius={15}
                  source={{ uri: data.images[0] }}
                  alt={"favorites"}
                />

                {/* Main Content Card */}
                <Box
                  w="100%"
                  bottom={0}
                  borderRadius={15}
                  backgroundColor="rgba(255,255,255,0.85)"
                  position="absolute"
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 8,
                  }}
                >

                        <TouchableOpacity
                      style={{ padding: 16 }}
                      key={data.id}
                      onPress={() => goToPublication(data.id)}
                    >
                      <Box flexDirection="row">
                        <Text
                          fontSize={22}
                          color="#525252"
                          fontWeight="$semibold"
                        >
                          {data.name}
                        </Text>
                        <Icon
                          w={24}
                          h={24}
                          top={5}
                          position="absolute"
                          right={0}
                          as={ChevronRightIcon}
                        />
                      </Box>

                      <Box mt={10} flexDirection="row" alignItems="center">
                        <MapPinned size={24} color="#666666" />
                        <Text ml={5} fontWeight="$semibold" fontSize={14}>
                          {" "}
                          {data.address}
                        </Text>
                      </Box>

                      <Box mt={10} flexDirection="row">
                        <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">
                          MXN ${data.price}
                        </Text>
                        <Text ml={6} top={2} fontSize={14} fontWeight="$normal">
                          por noche
                        </Text>
                      </Box>
                    </TouchableOpacity>

                </Box>
              </Box>
            </>
                )
            })
          )}

        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};

export default Search;
