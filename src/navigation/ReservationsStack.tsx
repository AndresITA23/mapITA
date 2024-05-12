import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reservations from '../screens/Reservations';
import {screen} from '../utils'
import Publication from '../components/Publication';

const Stack = createNativeStackNavigator();

const ReservationsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.reservations.reservations} 
            component={Reservations} 
            options={{ title: "Reservations", headerShown:false }}
            ></Stack.Screen>
            <Stack.Screen name={screen.reservations.publicationRes} component={Publication} options={{headerShown:false, presentation:'modal'}}></Stack.Screen>
        </Stack.Navigator>
    )
};

export default ReservationsStack;