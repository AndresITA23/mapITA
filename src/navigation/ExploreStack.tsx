import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '../screens/Explore';
import AddPlaceScreen from '../screens/AddPlace/AddPlaceScreen';
import {screen} from '../utils'

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.explore.explore} component={Explore}></Stack.Screen>
            <Stack.Screen name={screen.explore.addPlace} component={AddPlaceScreen}></Stack.Screen>
        </Stack.Navigator>
    )
};

export default ExploreStack;