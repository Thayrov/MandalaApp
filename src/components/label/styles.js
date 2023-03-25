import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: ((height * width) / 1000) * 0.08,
        fontFamily: 'Caveat-variable',
        marginVertical: ((height * width) / 1000) * 0.05,
        color: THEME.colors.TextColor,
    },
    sublabel: {
        fontSize: ((height * width) / 1000) * 0.06,
        fontFamily: 'Caveat-variable',
        color: THEME.colors.NeutralColor,
        marginVertical: ((height * width) / 1000) * 0.05,
    },
});
