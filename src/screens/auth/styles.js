import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.BGColor,
    },
    content: {
        width: (height * width) / 1000,
        maxWidth: ((height * width) / 1000) * 0.8,
        padding: ((height * width) / 1000) * 0.07,
        borderColor: THEME.colors.ComplementaryColor2,
        borderWidth: 1,
        backgroundColor: THEME.colors.ComplementaryColor1,
        borderRadius: 5,
        minHeight: ((height * width) / 1000) * 1.6,
    },
    title: {
        fontSize: ((height * width) / 1000) * 0.1,
        fontFamily: 'Rancho-Regular',
        textAlign: 'center',
    },
    label: {
        fontSize: ((height * width) / 1000) * 0.08,
        fontFamily: 'Caveat-variable',
        marginTop: ((height * width) / 1000) * 0.02,
    },

    buttonContainer: {
        marginVertical: ((height * width) / 1000) * 0.05,
    },
    prompt: {
        width: '100%',
        alignItems: 'center',
        marginVertical: ((height * width) / 1000) * 0.05,
    },
    promptButton: {
        width: '100%',
        backgroundColor: THEME.colors.SecondaryColor,
        borderWidth: 1,
        borderColor: THEME.colors.PrimaryColor,
        padding: ((height * width) / 1000) * 0.04,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: ((height * width) / 1000) * 0.06,
        fontFamily: 'Rancho-Regular',
        color: THEME.colors.TextColor,
    },
});
