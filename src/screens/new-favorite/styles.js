import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        margin: ((height * width) / 1000) * 0.08,
    },
    title: {
        fontFamily: 'Rancho-Regular',
        fontSize: ((height * width) / 1000) * 0.1,
        textAlign: 'center',
        marginBottom: ((height * width) / 1000) * 0.08,
    },
    input: {
        borderBottomColor: THEME.colors.WarningColor,
        borderBottomWidth: 1,
        marginBottom: ((height * width) / 1000) * 0.08,
        padding: ((height * width) / 1000) * 0.04,
    },
});

export default styles;
