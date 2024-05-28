import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  ButtonIcon,
  FavouriteIcon,
  Icon,
  VStack,
  ChevronRightIcon,
} from "@gluestack-ui/themed";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../utils";
import LoadingModal from "../components/LoadingModal";
import NotFoundPlaces from "./NotFoundPlaces";
import { size, map } from "lodash";
import BtnFavorite from "../components/BtnFavorite";

const Favorites = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const [places, setPlaces] = useState(null);
  console.log(places);

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "Favorites",
    });
  });

  useEffect(() => {
    const q = query(
      collection(db, "favorites"),
      where("idUser", "==", auth.currentUser.uid)
    );

    onSnapshot(q, async (snapshot) => {
      let placesArray = [];
      for await (const item of snapshot.docs) {
        const data = item.data();
        const docRef = doc(db, "places", data.idPlace);
        const docSnap = await getDoc(docRef);
        const newData = docSnap.data();
        newData.idFavorite = data.id;

        placesArray.push(newData);
      }

      setPlaces(placesArray);
    });
  }, []);

  if (!places)
    return <LoadingModal show text="Loading favorites"></LoadingModal>;

  if (size(places) === 0) return <NotFoundPlaces></NotFoundPlaces>;

  const goToPublication = (id) => {
    navigation.navigate(screen.explore.tab, {
      screen: screen.explore.publicationExp,
      params: {
        id: id,
      },
    });
  };

  return (
    <VStack flex={1} backgroundColor="#EFEFEF">
      <SafeAreaView flex={1}>
        <ScrollView>
          {map(places, (place) => (
            <>
              <Box mx={16} marginTop={16} my={16}>
                <Image
                  w="100%"
                  h={289}
                  borderRadius={15}
                  source={{ uri: place.images[0] }}
                  alt={"favorites"}
                />

                <BtnFavorite idPlace={place.id}></BtnFavorite>

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
                      key={place.id}
                      onPress={() => goToPublication(place.id)}
                    >
                      <Box flexDirection="row">
                        <Text
                          fontSize={22}
                          color="#525252"
                          fontWeight="$semibold"
                        >
                          {place.name}
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
                          {place.address}
                        </Text>
                      </Box>

                      <Box mt={10} flexDirection="row">
                        <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">
                          MXN ${place.price}
                        </Text>
                        <Text ml={6} top={2} fontSize={14} fontWeight="$normal">
                          por noche
                        </Text>
                      </Box>
                    </TouchableOpacity>

                </Box>
              </Box>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};

export default Favorites;
