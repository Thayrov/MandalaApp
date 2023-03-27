import { Image, Text, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { THEME } from '../../constants/theme';
import styles from './styles';

const FavItem = ({ item, onDelete }) => {
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
                <Image source={{ uri: item.img2 }} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
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
