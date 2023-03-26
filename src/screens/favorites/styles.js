import { Dimensions, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.BGColor,
    },
    containerList: {
        flex: 1,
    },
    contentContainerList: {
        padding: ((height * width) / 1000) * 0.08,
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
