import { FlatList, View } from 'react-native';
import React, { useCallback } from 'react';
import { deleteOrder, getOrders } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { OrderItem } from '../../components';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
    const onDelete = (id) => {
        dispatch(deleteOrder(id));
    };
    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
        }, [dispatch])
    );
    const keyExtractor = (item) => item.id.toString();
    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
    return (
        <View style={styles.container}>
            <FlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
        </View>
    );
};
export default Orders;
