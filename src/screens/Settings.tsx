import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack, View, Image, Button, PlayIcon, ButtonIcon, ChevronRightIcon, ButtonText, Switch, Icon, Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";
import { Bell, CircleAlert, CircleHelp, CreditCard, LogOut, ShieldAlert, UserRound } from "lucide-react-native";
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updateProfile, signOut} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../utils";
import LoadingModal from "../components/LoadingModal";

const Settings = () => {

  const navigation = useNavigation();

  const {uid, photoURL, displayName, email} = getAuth().currentUser;

  const [avatar, setAvatar] = useState(photoURL);
  const [isLoading, setIsLoading] = useState(false);
  
  const [image, setImage] = useState(null);

  //Change and upload avatar photo
  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],

    });

    if (!result.canceled) {
        const uri = result.assets[0].uri; 
        setIsLoading(true);
        uploadImage(uri);
      }
  };

  const uploadImage = async (uri) => {
    
    console.log(uri)
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    console.log(storageRef);

    uploadBytes(storageRef, blob).then((snapshot) => {
        updatePhotoUrl(snapshot.metadata.fullPath)
    });
  };

  const updatePhotoUrl = async (imagePath) => {
    try {
      const storage = getStorage();
      const imageRef = ref(storage, imagePath);
  
      const imageUrl = await getDownloadURL(imageRef);
      console.log("Downloaded URL:", imageUrl);
  
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateProfile(currentUser, { photoURL: imageUrl });
        console.log("Profile photo updated successfully.");
        setAvatar(imageUrl);
      } else {
        console.error("Current user is null. Cannot update profile.");
      }
    } catch (error) {
      console.error("Error updating profile photo:", error);
    }
    setIsLoading(false);
  };

  //Function to logout
  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);

    } catch (error) {
      console.error('Cannot log out:', error);
    }
  };

 

  return (
    <>
    <VStack space="lg" backgroundColor="#EFEFEF">
        <View  mx={"$8"} marginTop={"$12"} alignItems="center" borderRadius={"$3xl"} backgroundColor="white"
            style={{shadowColor: "black", shadowOffset: { width: 0, height: 6}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8}}>
            <Heading w={"$72"} marginTop={"$4"} fontSize={"$2xl"}>Profile</Heading>

            <TouchableOpacity onPress={changeAvatar}>
            <Avatar bgColor="#BFA27E" size="xl">
      <AvatarFallbackText>AA</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: avatar,
        }}
      />
    </Avatar>
            </TouchableOpacity>

            <Text marginTop={"$3"} fontWeight="$semibold" fontSize={"$2xl"}> {displayName || "Anonimo"}</Text>
            <Text marginTop={"$3"} marginVertical={"$6"}> {email}</Text>
        </View>

        <View mx={"$8"} alignItems="center" borderRadius={"$3xl"} backgroundColor="white"
            style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
            <Heading w={"$72"} marginTop={"$4"}>Configuration</Heading>

            <Box position="relative" alignItems="center" justifyContent="center" marginTop={"$1"} width={"100%"}>
                <Button w={"$72"} flexDirection="row" alignItems="center" px={"$0"} p={10} bgColor="white" $active-bgColor="#EEEEEE" borderRadius={5}>
                    <UserRound size={32} color={"#BFA27E"} />
                    <ButtonText fontSize={"$lg"} marginLeft={"$4"} fontWeight="$normal" color="black">Personal information</ButtonText>
                    <ButtonIcon alignItems="flex-end" ml={"$5"} size="xl" as={ChevronRightIcon} marginLeft={"auto"} color="black" />
                </Button>
            </Box>

            <Box position="relative" alignItems="center" justifyContent="center" marginTop={"$1"} width={"100%"}>
                <Button w={"$72"} flexDirection="row" alignItems="center" px={"$0"} p={10} bgColor="white" $active-bgColor="#EEEEEE" borderRadius={5}
                        onPress={() => navigation.navigate(screen.settings.addPlace)}>
                    <UserRound size={32} color={"#BFA27E"} />
                    <ButtonText fontSize={"$lg"} marginLeft={"$4"} fontWeight="$normal" color="black">Add your place</ButtonText>
                    <ButtonIcon alignItems="flex-end" ml={"$5"} size="xl" as={ChevronRightIcon} marginLeft={"auto"} color="black" />
                </Button>
            </Box>

            <Box position="relative" alignItems="center" justifyContent="center" marginTop={"$1"} width={"100%"} px={"$0"}>
                <Button w={"$72"} flexDirection="row" alignItems="center" px={"$0"} p={10} bgColor="white" $active-bgColor="#EEEEEE" borderRadius={5}>
                    <ShieldAlert size={32} color={"#BFA27E"} />
                    <ButtonText fontSize={"$lg"} marginLeft={"$4"} color="black" fontWeight="$normal">Privacity</ButtonText>
                    <ButtonIcon alignItems="flex-end" ml={"$5"} color="black" size="xl" as={ChevronRightIcon} marginLeft={"auto"} />
                </Button>
            </Box>

            <Box position="relative" alignItems="center" justifyContent="center" marginTop={"$1"} marginBottom={"$2"} width={"100%"}>
                <Button w={"$72"} flexDirection="row" alignItems="center" px={"$0"} p={10} bgColor="white" $active-bgColor="#EEEEEE" borderRadius={5}>
                    <CircleHelp size={32} color={"#BFA27E"} />                    
                    <ButtonText fontSize={"$lg"} marginLeft={"$4"} color="black" fontWeight="$normal">Help</ButtonText>
                    <ButtonIcon alignItems="flex-end" ml={"$5"} color="black" size="xl" as={ChevronRightIcon} marginLeft={"auto"} />
                </Button>
            </Box>
        </View>
        <View mx={"$8"} alignItems="center" borderRadius={"$3xl"} backgroundColor="white"
            style={{shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
            <Heading w={"$72"} marginTop={"$4"}>Preferences</Heading>

            <Box position="relative" alignItems="center" justifyContent="center" marginTop={"$1"} width={"100%"}>
                <Button w={"$72"} flexDirection="row" alignItems="center" px={"$0"} p={10} bgColor="white" $active-bgColor="#EEEEEE" borderRadius={5}>
                    <Bell size={32} color={"#BFA27E"} />                    
                    <ButtonText fontSize={"$lg"} marginLeft={"$4"} color="black" fontWeight="$normal">Notification</ButtonText>
                    <Switch alignItems="flex-end" marginLeft={"auto"} size="md" isDisabled={false} />
                </Button>
            </Box>

            <Box position="relative" alignItems="center" justifyContent="center" marginTop={"$1"} marginBottom={"$2"} width={"100%"}>
                <Button w={"$72"} flexDirection="row" alignItems="center" px={"$0"} p={10} bgColor="white" $active-bgColor="#EEEEEE" borderRadius={5} 
                onPress={logout}>
                    <LogOut size={32} color={"#BFA27E"} />
                    <ButtonText fontSize={"$lg"} marginLeft={"$4"} color="#BFA27E"> Logout</ButtonText>
                    <ButtonIcon alignItems="flex-end" ml={"$5"} size="xl" color="#BFA27E" as={ChevronRightIcon} marginLeft={"auto"} />
                </Button>
            </Box>
        </View>
    </VStack>

    <LoadingModal show={isLoading} text="Updating profile image"></LoadingModal>
    </>

  );
};

export default Settings;
