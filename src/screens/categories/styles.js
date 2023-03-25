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
});

export default styles;
