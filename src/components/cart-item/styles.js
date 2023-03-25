import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: ((height * width) / 1000) * 0.04,
        marginHorizontal: ((height * width) / 1000) * 0.04,
        flexDirection: 'row',
        backgroundColor: THEME.colors.SecondaryColor,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: THEME.colors.PrimaryColor,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingVertical: ((height * width) / 1000) * 0.02,
    },
    contentContainer: {
        flex: 0.6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    contentContainer2: {
        flex: 0.4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        paddingTop: ((height * width) / 1000) * 0.03,
        paddingHorizontal: ((height * width) / 1000) * 0.01,
    },
    title: {
        fontSize: ((height * width) / 1000) * 0.08,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        paddingTop: ((height * width) / 1000) * 0.02,
    },

    quantity: {
        fontSize: ((height * width) / 1000) * 0.07,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        paddingTop: ((height * width) / 1000) * 0.02,
        paddingHorizontal: ((height * width) / 1000) * 0.03,
    },
    price: {
        fontSize: ((height * width) / 1000) * 0.07,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.TextColor,
        paddingTop: ((height * width) / 1000) * 0.02,
        paddingHorizontal: ((height * width) / 1000) * 0.03,
    },
});

export default styles;
