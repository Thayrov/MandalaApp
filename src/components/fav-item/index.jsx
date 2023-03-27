import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { THEME } from '../../constants/theme';
import styles from './styles';

const FavItem = ({ item, onDelete }) => {
    const [pickedUrl, setPickedUrl] = useState(null);

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Insufficient permits', 'Need permits to use camera.', [{ text: 'Ok' }]);
            return false;
        }
        return true;
    };

    const onHandleTakeImage = async () => {
        const isCameraPermission = await verifyPermissions();
        if (!isCameraPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7,
        });

        setPickedUrl(image.uri);
    };

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                style={styles.icon}
                name="cards-heart"
                size={20}
                color={THEME.colors.BGColor}
            />
            <View style={styles.contentContainer2}>
                <Image source={{ uri: item.img }} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            <View>
                {!pickedUrl ? (
                    <TouchableOpacity onPress={onHandleTakeImage}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="image-plus"
                            size={20}
                            color={THEME.colors.BGColor}
                        />
                    </TouchableOpacity>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUrl }} />
                )}
            </View>

            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="trash-can"
                    size={20}
                    color={THEME.colors.WarningColor}
                />
            </TouchableOpacity>
        </View>
    );
};
export default FavItem;
