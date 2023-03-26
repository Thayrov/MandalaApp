import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    header: {
        flex: 1,
        padding: ((height * width) / 1000) * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.BGColor,
    },
    headerTitle: {
        fontFamily: 'Rancho-Regular',
        fontSize: ((height * width) / 1000) * 0.1,
        textAlign: 'center',
    },
});

export default styles;
