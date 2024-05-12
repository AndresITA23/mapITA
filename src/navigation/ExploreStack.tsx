import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '../screens/Explore';
import AddPlaceScreen from '../screens/AddPlace/AddPlaceScreen';
import {screen} from '../utils'
import Search from '../screens/Search';
import Filtters from '../screens/Filtters';
import Publication from '../components/Publication';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.explore.explore} component={Explore} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name={screen.explore.addPlace} component={AddPlaceScreen}></Stack.Screen>
            <Stack.Screen name={screen.explore.search} component={Search} options={{presentation: 'fullScreenModal'}}></Stack.Screen>
            <Stack.Screen name={screen.explore.filtters} component={Filtters}></Stack.Screen>
            <Stack.Screen name={screen.explore.publicationExp} component={Publication} options={{headerShown:false, presentation:'modal'}}></Stack.Screen>
        </Stack.Navigator>
    )
};

export default ExploreStack;