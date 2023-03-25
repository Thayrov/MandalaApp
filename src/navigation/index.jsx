import { Text, View } from 'react-native';

import AuthNavigator from './auth';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../styles';
import { useSelector } from 'react-redux';

//import TabsNavigator from './tabs';

const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId);
    return (
        <NavigationContainer>
            {userId ? (
                <View style={styles.container}>
                    <Text>MandalaApp!</Text>
                </View>
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    );
};
export default AppNavigator;
