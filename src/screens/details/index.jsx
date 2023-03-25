import { Button, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions/';
import styles from './styles';

const Details = ({ navigation }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selected);
    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.title}>{product?.description}</Text>
            <Image source={{ uri: product?.img }} style={styles.image} />
            <Text style={styles.title}>${product?.price}</Text>
            <Button title="Add to cart" onPress={onAddToCart} color={THEME.colors.SecondaryColor} />
        </View>
    );
};
export default Details;
