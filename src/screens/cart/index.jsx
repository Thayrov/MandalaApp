import { CartItem, EmptyData } from '../../components';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { confirmOrder, removeFromCart } from '../../store/actions/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const onDelete = (id) => {
        dispatch(removeFromCart(id));
    };
    const sendOrder = () => {
        dispatch(confirmOrder(cart, total));
    };
    const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
    const keyExtractor = (item) => item.id.toString();

    const Footer = () =>
        cart.length > 0 && (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm} onPress={sendOrder}>
                    <Text style={styles.confirmText}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: </Text>
                        <Text style={styles.totalPrice}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <EmptyData
                    source={cart}
                    message="You have not included any items to the cart yet"
                />

                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    style={styles.listContainer}
                />
            </View>
            <Footer />
        </View>
    );
};
export default Cart;
