import { EmptyData, FavItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import { PRODUCTS } from '../../constants/data/products';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { removeFromFavs } from '../../store/actions';
import styles from './styles';

const Favorites = ({ navigation }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);
    const onDelete = (id) => {
        dispatch(removeFromFavs(id));
    };

    const renderItem = ({ item }) => <FavItem item={item} onDelete={onDelete} />;
    const keyExtractor = (item) => item.id.toString();
    return (
        <SafeAreaView style={styles.container}>
            <EmptyData
                source={favorites}
                message="You have not included any items to your favorites yet"
            />
            <FlatList
                style={styles.containerList}
                data={favorites}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.contentContainerList}
            />
        </SafeAreaView>
    );
};
export default Favorites;
