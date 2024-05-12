import { View, Text, FlatList, Box,Image, Heading, Icon } from "@gluestack-ui/themed"; // Asegúrate de importar los componentes de tu librería de UI
import { ChevronRightIcon, Heart, MapPinned } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'
import Publication from '../components/Publication'
import {screen} from '../utils'

const ListPlaces = (props) => {
  const { places } = props;
  const navigation = useNavigation();

  const goToPlace = (place) => {
    console.log("Go to place", place.name)
    navigation.navigate(screen.explore.publicationExp, {id: place.id});
  }

  return (
    <View>
      <FlatList 
        data={places}
        renderItem={({ item }) => (

          <Box my={16} mx={16} h={450} borderRadius={30}>
            <Image w="100%" h={335} borderRadius={30} source={{uri: item.images[0]}} />

            <Box h={45} w={45} alignItems="center" justifyContent="center" opacity="$90" position='absolute' borderRadius={999} bgColor="white" right={16} top={16}>
              <Heart color="#222222" size={24} />
            </Box>

            <Box w="100%" bottom={0} position="absolute" borderRadius={30} backgroundColor="white"
              style={{ shadowColor: "black", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 8 }}>
              
              <TouchableOpacity style={{padding:16}} onPress={() => goToPlace(item)}>
                <Box flexDirection="row">
                  <Heading color="#525252" fontSize={24} fontWeight="$semibold">{item.name}</Heading>
                  <Icon w={24} h={24} mt={5} as={ChevronRightIcon} position="absolute" right={0} />
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontSize={12}>{item.description}</Text>
                </Box>

                <Box mt={10} flexDirection="row" alignItems="center">
                  <MapPinned size={18} color="#525252" />
                  <Text ml={5} fontWeight="$medium" fontSize={12}>{item.address}</Text>
                </Box>

                <Box mt={10} flexDirection="row">
                  <Text fontWeight="$bold" fontSize={16} color="#5C5C5C">MXN ${item.price}</Text>
                  <Text ml={6} top={2} fontSize={14}>por noche</Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        )}
      />
    </View>
  );
};

export default ListPlaces;