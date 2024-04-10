import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import {screen} from '../utils'

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.settings.settings} 
            component={Settings} 
            options={{ title: "Settings" }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
};

export default SettingsStack;