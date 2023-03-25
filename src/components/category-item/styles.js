import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: ((height * width) / 1000) * 0.04,
        marginVertical: ((height * width) / 1000) * 0.02,
        height: ((height * width) / 1000) * 0.3,
    },
    contentContainer: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: THEME.colors.ComplementaryColor2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: ((height * width) / 1000) * 0.02,
    },

    title: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.ComplementaryColor1,
        padding: height * 0.01,
    },
});

export default styles;
