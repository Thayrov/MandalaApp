import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
    },
    title: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Rancho-Regular',
        color: THEME.colors.TextColor,
        padding: ((height * width) / 1000) * 0.02,
    },
    listContainer: {
        flex: 1,
        backgroundColor: THEME.colors.ComplementaryColor1,
    },
    footer: {
        padding: ((height * width) / 1000) * 0.04,
        backgroundColor: THEME.colors.ComplementaryColor2,
        borderTopColor: THEME.colors.PrimaryColor,
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    confirm: {
        backgroundColor: THEME.colors.SecondaryColor,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    confirmText: {
        fontFamily: 'Caveat-variable',
        color: THEME.colors.ComplementaryColor1,
        fontSize: ((height * width) / 1000) * 0.08,
    },
    totalContainer: {
        flex: 0.5,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingEnd: ((height * width) / 1000) * 0.02,
    },
    totalText: {
        fontFamily: 'Caveat-variable',
        color: THEME.colors.ComplementaryColor1,
        fontSize: ((height * width) / 1000) * 0.08,
    },
    totalPrice: {
        fontFamily: 'Caveat-variable',
        color: THEME.colors.ComplementaryColor1,
        fontSize: ((height * width) / 1000) * 0.08,
    },
    header: {
        flex: 1,
        padding: ((height * width) / 1000) * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.ComplementaryColor1,
    },
    headerTitle: {
        fontFamily: 'Rancho-Regular',
        fontSize: ((height * width) / 1000) * 0.1,
        textAlign: 'center',
    },
});

export default styles;
