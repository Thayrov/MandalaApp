import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Rancho-Regular',
        color: THEME.colors.TextColor,
        padding: ((height * width) / 1000) * 0.02,
    },
    image: {
        height: '40%',
        minHeight: 220,
        width: '80%',
        borderRadius: 20,
    },
});

export default styles;
