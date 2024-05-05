import React from "react";
import { View, Text, Button } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { screen } from "../utils";

const Explore = () => {
  const navigation = useNavigation();

  const handleAddPlacePress = () => {
    navigation.navigate(screen.explore.addPlace);
  };

  return (
    <View>
      <Text>Explore</Text>
      <Button
        w={"$72"}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px={"$0"}
        onPress={handleAddPlacePress}
      >
        <Text>Add place</Text>
      </Button>
    </View>
  );
};

export default Explore;
