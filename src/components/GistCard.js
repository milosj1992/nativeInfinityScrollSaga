import React from 'react'
import { Text, View, Image } from 'react-native';

import styles from './GistCard.style';


const GistCard = ({ gists }) => {
    return (
            <View style={styles.container}>
                <Image source={{uri:gists.owner.avatar_url}} style={styles.image}/>
                <Text style={styles.title}>{Object.values(gists.files)[0].filename}</Text>
            </View>
    )}

export default GistCard
