import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        width: '100%',
        height: 180,
        marginBottom: ((height * width) / 1000) * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: THEME.colors.WarningColor,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default styles;
