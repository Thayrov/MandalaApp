import { StyleSheet } from 'react-native';
import { THEME } from './constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
