import { Button, ScrollView, Text, View } from 'react-native';

import { ImageSelector } from '../../components';
import { THEME } from '../../constants/theme';
import { styles } from './styles';
import { useState } from 'react';

const NewFavorite = ({ navigation }) => {
    const [img2, setImg2] = useState(null);

    const onImage = (uri) => {
        setImg2(uri);
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>New Favorite</Text>
                <ImageSelector onImage={onImage} />
                <Button
                    disabled={title.length === 0}
                    color={THEME.colors.SecondaryColor}
                    title="Save"
                    onPress={() => {}}
                />
            </View>
        </ScrollView>
    );
};

export default NewFavorite;
