import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://path/to/official/photo' }} style={styles.image} />
            <Text style={styles.text}>Nombre: John Doe</Text>
            <Text style={styles.text}>Apellido: Smith</Text>
            <Text style={styles.text}>Matrícula: 123456</Text>
            <Text style={styles.quote}>"Reflexión sobre la seguridad y el servicio a la comunidad"</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
    quote: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default AboutScreen;
