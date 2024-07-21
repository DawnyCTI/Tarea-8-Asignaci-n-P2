import React from 'react';
import { View, Text, FlatList } from 'react-native';
import IncidentItem from '../components/IncidentItem';

const IncidentsScreen = ({ navigation }) => {
    const incidents = [
        // Datos de ejemplo
    ];

    return (
        <View>
            <FlatList
                data={incidents}
                renderItem={({ item }) => <IncidentItem incident={item} onPress={() => navigation.navigate('IncidentDetail', { incident: item })} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default IncidentsScreen;
