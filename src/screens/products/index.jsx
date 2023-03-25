import { FlatList, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { filterProduct, selectProduct } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from '../../components';
import styles from './styles';

const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.product.filteredProducts);

    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate('Details', {
            title: item.title,
        });
    };
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
    const keyExtractor = (item) => item.id.toString();
    useEffect(() => {
        dispatch(filterProduct(category.id));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
                contentContainerStyle={styles.contentContainerList}
            />
        </SafeAreaView>
    );
};
export default Products;
