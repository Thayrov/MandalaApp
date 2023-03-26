import { Text, View } from 'react-native';

import styles from './styles';

const EmptyData = ({ source, message }) => {
    if (source.length <= 0)
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{message}</Text>
            </View>
        );
};

export default EmptyData;
