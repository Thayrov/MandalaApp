import { Button, Image, Text, View } from 'react-native';
import { addToCart, addToFavs } from '../../store/actions/';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { THEME } from '../../constants/theme';
import styles from './styles';

const Details = ({ navigation }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selected);
    const onAddToCart = () => {
        dispatch(addToCart(product));
    };
    const onAddToFavs = () => {
        dispatch(addToFavs(product));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.title}>{product?.description}</Text>
            <Image source={{ uri: product?.img }} style={styles.image} />
            <Text style={styles.title}>${product?.price}</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Add to cart"
                    onPress={onAddToCart}
                    color={THEME.colors.WarningColor}
                />
                <Button
                    title="Add to favs"
                    onPress={onAddToFavs}
                    color={THEME.colors.SecondaryColor}
                />
            </View>
        </View>
    );
};
export default Details;
