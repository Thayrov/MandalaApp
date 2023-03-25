import { Text, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { THEME } from '../../constants/theme';
import styles from './styles';

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                style={styles.icon}
                name="barley"
                size={20}
                color={THEME.colors.WarningColor}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer2}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.quantity}>x{item.quantity}</Text>
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
export default CartItem;
