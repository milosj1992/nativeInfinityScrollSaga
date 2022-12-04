import React, { useEffect, useState } from 'react';
import {  Text, View, SafeAreaView, FlatList, ActivityIndicator, Button } from 'react-native';

import { connect } from 'react-redux';
import { gistRequest } from '../../store/action';

import GistCard from '../../components/GistCard';
import styles from './HomeScreen.style';

const HomeScreen = ({ gistModel, dispatch }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        requestAPI();
    }, [page])


    const requestAPI = () => {
        dispatch(gistRequest({
             page: page
        }))
    }
    const fetchMoreData = () => {
        if (!gistModel.isListEnd && !gistModel.moreLoading) {
            setPage(page + 1)
        }
    }
    const renderFooter = () => (
        <View style={styles.footerText}>
            {gistModel.moreLoading && <ActivityIndicator />}
            {gistModel.isListEnd && <Text>No more articles at the moment</Text>}
        </View>
    )
    const renderEmpty = () => (
        <View style={styles.emptyText}>
            <Text>No Data at the moment</Text>
            <Button onPress={() => requestAPI()} title='Refresh'/>
        </View>
    )
    const renderList = ({ item }) => {
        return (
            <GistCard gists={item} />
        );
    };
    return (
        <SafeAreaView>
            {gistModel.loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
                :
                <FlatList
                    data={gistModel.data}
                    renderItem={renderList}
                    keyExtractor={item => item.id}
                    ListFooterComponent={renderFooter}
                    ListEmptyComponent={renderEmpty}
                    onEndReachedThreshold={0.1}
                    onEndReached={fetchMoreData}
                />
            }

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        gistModel: state.gist
    }
};

export default connect(mapStateToProps)(HomeScreen);


