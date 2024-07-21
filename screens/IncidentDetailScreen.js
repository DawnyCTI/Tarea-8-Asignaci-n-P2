import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const IncidentDetailScreen = ({ route }) => {
    const { incident } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{incident.title}</Text>
            <Text>{incident.date}</Text>
            <Text>{incident.description}</Text>
            <Image source={{ uri: incident.photo }} style={styles.image} />
            <Button title="Play Audio" onPress={() => { /* Lógica para reproducir audio */ }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
});

export default IncidentDetailScreen;
