import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as AudioRecorder from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewIncidentScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [audio, setAudio] = useState(null);
    const [recording, setRecording] = useState(null);

    const pickImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission denied');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setPhoto(result.uri);
            }
        } catch (error) {
            console.log('Failed to pick image', error);
        }
    };

    const startRecording = async () => {
        try {
            const { status } = await AudioRecorder.requestPermissionsAsync();
            if (status !== 'granted') return;

            await AudioRecorder.Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await AudioRecorder.Audio.Recording.createAsync(
                AudioRecorder.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );

            setRecording(recording);
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const stopRecording = async () => {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setAudio(uri);
    };

    const saveIncident = async () => {
        const newIncident = {
            id: Date.now().toString(),
            title,
            description,
            photo,
            audio,
            date: new Date().toLocaleDateString(),
        };

        const storedIncidents = await AsyncStorage.getItem('incidents');
        const incidents = storedIncidents ? JSON.parse(storedIncidents) : [];
        incidents.push(newIncident);
        await AsyncStorage.setItem('incidents', JSON.stringify(incidents));

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />

            <Text style={styles.label}>Descripción</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} multiline />

            <Button title="Seleccionar Foto" onPress={pickImage} />
            {photo && <Image source={{ uri: photo }} style={styles.image} />}

            <Button title={recording ? 'Detener Grabación' : 'Grabar Audio'} onPress={recording ? stopRecording : startRecording} />
            {audio && <Text>Audio Grabado</Text>}

            <Button title="Guardar Incidente" onPress={saveIncident} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
});

export default NewIncidentScreen;
