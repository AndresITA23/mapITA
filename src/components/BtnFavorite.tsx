import {
  View,
  Text,
  Button,
  Box,
  Image,
  Heading,
  Icon,
  ButtonIcon,
  FavouriteIcon,
} from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
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
import { getAuth } from "firebase/auth";
import { v4 as uuid } from "uuid";
import { forEach, size } from "lodash";
import { db } from "../utils";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";


const BtnFavorite = (props) => {
  const { idPlace } = props;
  const auth = getAuth();
  // AddFavorites

  const [isFavorite, setIsFavorite] = useState(false);
  const [isReload, setIsReload] = useState (false);


  useEffect(() => {
    (async () => {
      const response = await getFavorites();

      setIsFavorite(size(response) > 0);
    console.log(size(response));
 
    })();
  }, [idPlace, isReload]);

  const onReload= () => setIsReload((prevState) => !prevState);


  const getFavorites = async () => {
    const q = query(
      collection(db, "favorites"),
      where("idPlace", "==", idPlace),
      where("idUser", "==", auth.currentUser.uid)
    );

    const result = await getDocs(q);
    return result.docs;
  };

  const addFavorite = async () => {
    try {
      const idFavorite = uuid();
      const data = {
        id: idFavorite,
        idPlace: idPlace,
        idUser: auth.currentUser.uid,
      };

      await setDoc(doc(db, "favorites", idFavorite), data);
      onReload();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavcrite = async () => {
    try {
        const response = await getFavorites()
        forEach(response, async(item) => {
            await deleteDoc(doc(db, "favorites", item.id))
        })
        onReload();
    } catch (error) {
        console.log(error);

    }
    
  }

  return (
    <View
            w={50}
            h={50}
            position="absolute"
            right={24}
            borderRadius={999}
            bgColor="white"
            my={"$12"}
            alignItems="center"
            justifyContent="center">
            <TouchableOpacity onPress={isFavorite ? removeFavcrite : addFavorite}>
                <MaterialIcons name={isFavorite ? "favorite" : "favorite-outline"} 
                size={32} 
                color={isFavorite ? "red" : "black"} />
            </TouchableOpacity>
    </View>
  );
};

export default BtnFavorite;
