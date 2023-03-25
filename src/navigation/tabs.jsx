import CartNavigator from './cart';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen');

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    const cart = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Rancho-Regular',
                    fontSize: ((height * width) / 1000) * 0.045,
                    color: THEME.colors.TextColor,
                },
                tabBarActiveTintColor: THEME.colors.SecondaryColor,
                tabBarInactiveTintColor: THEME.colors.NeutralColor,
            }}>
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'bread-slice' : 'bread-slice-outline'}
                            size={20}
                            color={
                                focused ? THEME.colors.SecondaryColor : THEME.colors.NeutralColor
                            }
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    title: 'Orders',

                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'basket' : 'basket-outline'}
                            size={20}
                            color={
                                focused ? THEME.colors.SecondaryColor : THEME.colors.NeutralColor
                            }
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={20}
                            color={
                                focused ? THEME.colors.SecondaryColor : THEME.colors.NeutralColor
                            }
                        />
                    ),
                    tabBarBadge: cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: THEME.colors.PrimaryColor,
                        color: THEME.colors.TextColor,
                        fontFamily: 'Rancho-Regular',
                        fontSize: 10,
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;
