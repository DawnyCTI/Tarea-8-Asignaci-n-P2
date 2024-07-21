import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IncidentsScreen from '../screens/IncidentsScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Incidents" component={IncidentsScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
