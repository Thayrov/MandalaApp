import { Text, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { THEME } from '../../constants/theme';
import { formatDate } from '../../utilities';
import styles from './styles';

const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                style={styles.icon}
                name="marker-check"
                size={24}
                color={THEME.colors.WarningColor}
            />
            <Text style={styles.date}>{formatDate(item.date)}</Text>
            <Text style={styles.total}>${item.total}</Text>

            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="trash-can"
                    size={24}
                    color={THEME.colors.WarningColor}
                />
            </TouchableOpacity>
        </View>
    );
};
export default OrderItem;
