import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
import {screen} from '../utils'
import Publication from '../components/Publication';

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.favorites.favorites} 
            component={Favorites} 
            options={{ title: "Favorites" }}
            ></Stack.Screen>
            <Stack.Screen name={screen.favorites.publicationFav} component={Publication} options={{headerShown:false, presentation:'modal'}}></Stack.Screen>
        </Stack.Navigator>
    )
};

export default FavoritesStack;