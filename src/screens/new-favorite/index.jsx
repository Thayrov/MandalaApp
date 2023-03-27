import { Button, ScrollView, Text, View } from 'react-native';

import { ImageSelector } from '../../components';
import { THEME } from '../../constants/theme';
import { addToFavs } from '../../store/actions';
//REVIEW -
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NewFavorite = ({ navigation }) => {
    const [img2, setImg2] = useState(null);

    const dispatch = useDispatch();

    const onHandlerSubmit = () => {
        dispatch(addToFavs(...item, img2));
        navigation.goBack();
    };

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
                    onPress={onHandlerSubmit}
                />
            </View>
        </ScrollView>
    );
};

export default NewFavorite;
