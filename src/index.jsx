import { ActivityIndicator, Text, View } from 'react-native';

import AppNavigator from './navigation/index';
import { Provider } from 'react-redux';
import { THEME } from './constants/theme';
import store from './store';
import styles from './styles';
import { useFonts } from 'expo-font';

const App = () => {
    const [loaded] = useFonts({
        'Caveat-variable': require('../assets/fonts/Caveat-VariableFont_wght.ttf'),
        'Rancho-Regular': require('../assets/fonts/Rancho-Regular.ttf'),
    });
    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={THEME.colors.SecondaryColor} />
            </View>
        );
    }
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

export default App;
