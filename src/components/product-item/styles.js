import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: ((height * width) / 1000) * 0.03,
        padding: ((height * width) / 1000) * 0.02,
        height: ((height * width) / 1000) * 0.3,
        borderRadius: 10,
        backgroundColor: THEME.colors.PrimaryColor,
        shadowColor: THEME.colors.ComplementaryColor2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },

    title: {
        fontFamily: 'Rancho-Regular',
        fontSize: ((height * width) / 1000) * 0.1,
        color: THEME.colors.TextColor,
        padding: height * 0.01,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontFamily: 'Caveat-variable',
        fontSize: ((height * width) / 1000) * 0.1,
        color: THEME.colors.TextColor,
    },
});

export default styles;
