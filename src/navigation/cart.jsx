import { Cart } from '../screens';
import { Dimensions } from 'react-native';
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('screen');

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: THEME.colors.SecondaryColor,
                },
                headerTintColor: THEME.colors.ComplementaryColor1,
                navigationBarColor: THEME.colors.SecondaryColor,
                headerTitleStyle: {
                    fontFamily: 'Caveat-variable',
                    fontSize: ((height * width) / 1000) * 0.1,
                    color: THEME.colors.BGColor,
                },
            }}>
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Cart',
                }}
            />
        </Stack.Navigator>
    );
};
export default CartNavigator;
