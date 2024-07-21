import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import IncidentDetailScreen from '../screens/IncidentDetailScreen';
import NewIncidentScreen from '../screens/NewIncidentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="IncidentDetail" component={IncidentDetailScreen} />
            <Stack.Screen name="NewIncident" component={NewIncidentScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
