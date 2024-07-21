import React from 'react';
import { View, Text, Image } from 'react-native';

const AboutScreen = () => {
    return (
        <View>
            <Image source={{ uri: 'https://path/to/official/photo' }} style={{ width: 200, height: 200 }} />
            <Text>Nombre: John Doe</Text>
            <Text>Apellido: Smith</Text>
            <Text>Matrícula: 123456</Text>
            <Text>"Reflexión sobre la seguridad y el servicio a la comunidad"</Text>
        </View>
    );
};

export default AboutScreen;
