import { Dimensions } from 'react-native';
import { Orders } from '../screens';
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('screen');
const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    );
};
export default OrdersNavigator;
