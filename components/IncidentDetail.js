import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const IncidentDetailScreen = ({ route }) => {
    const { incident } = route.params;

    return (
        <View>
            <Text>{incident.title}</Text>
            <Text>{incident.date}</Text>
            <Text>{incident.description}</Text>
            <Image source={{ uri: incident.photo }} style={{ width: 200, height: 200 }} />
            <Button title="Play Audio" onPress={() => { /* Lógica para reproducir audio */ }} />
        </View>
    );
};

export default IncidentDetailScreen;
