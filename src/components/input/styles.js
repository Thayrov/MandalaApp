import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderBottomColor: THEME.colors.PrimaryColor,
        borderBottomWidth: 1,
        fontFamily: 'Rancho-Regular',
        marginBottom: ((height * width) / 1000) * 0.07,
    },
    message: {
        marginVertical: ((height * width) / 1000) * 0.05,
    },
    helperText: {
        paddingTop: ((height * width) / 1000) * 0.01,
        fontSize: ((height * width) / 1000) * 0.055,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.WarningColor,
    },
});
