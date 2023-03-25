import { Categories, Details, Products } from '../screens';

import { Dimensions } from 'react-native';
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('screen');

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
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
                name="Categories"
                component={Categories}
                options={{
                    title: 'Categories',
                }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={({ route }) => ({ title: route.params.title })}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={({ route }) => ({ title: route.params.title })}
            />
        </Stack.Navigator>
    );
};
export default ShopNavigator;
