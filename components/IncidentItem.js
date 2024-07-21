import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const IncidentItem = ({ incident, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View>
                <Text style={styles.title}>{incident.title}</Text>
                <Text>{incident.date}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#f9c2ff',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default IncidentItem;
