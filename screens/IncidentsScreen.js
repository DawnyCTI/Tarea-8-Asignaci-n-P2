import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import IncidentItem from '../components/IncidentItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IncidentsScreen = ({ navigation }) => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchIncidents = async () => {
            const storedIncidents = await AsyncStorage.getItem('incidents');
            if (storedIncidents) setIncidents(JSON.parse(storedIncidents));
        };
        fetchIncidents();
    }, []);

    const clearIncidents = async () => {
        Alert.alert(
            'Confirmar',
            '¿Estás seguro de que deseas borrar todos los registros?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Borrar',
                    onPress: async () => {
                        await AsyncStorage.removeItem('incidents');
                        setIncidents([]);
                        Alert.alert('Todos los registros han sido borrados.');
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <Button title="Nuevo Incidente" onPress={() => navigation.navigate('NewIncident')} />
            <Button title="Borrar Todo" onPress={clearIncidents} color="red" />
            <FlatList
                data={incidents}
                renderItem={({ item }) => <IncidentItem incident={item} onPress={() => navigation.navigate('IncidentDetail', { incident: item })} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default IncidentsScreen;
