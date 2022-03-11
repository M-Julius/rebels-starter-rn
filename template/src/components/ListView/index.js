import React from 'react';
import { FlatList, View, Text, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListView = props => {
    const refContainer = React.useRef(null);
    const [offset, setOffset] = React.useState(0);

    const goToIndex = () => {
        refContainer.current?.scrollToIndex({
            animated: true,
            index: 0,
        });
    };

    const checkScroll = event => {
        setOffset(event?.nativeEvent.contentOffset.y);
    };

    const {
        data,
        onLoadMore,
        pullToRefresh,
        scrollToTop,
        renderRow,
        loading,
        numColumns,
        refreshing,
        bottomIndicatorStyle,
        IconBottomIndicator,
        headerComponent,
        emptyComponent,
        loadingComponent,
        separatorComponent,
    } = props;

    const formatData = (item, column = 0) => {
        if (column > 0) {
            const numberOfRow = Math.floor(item.length / column);

            let elemenLastRow = item.length - (numberOfRow * column);

            while (elemenLastRow !== column && elemenLastRow !== 0) {
                item.push({ key: `key-${elemenLastRow}`, isEmpty: true });
                elemenLastRow = elemenLastRow + 1;
            }

            return data;
        }
        return data;
    };

    const renderFooter = () => {
        if (loading) {
            return (
                <View>
                    { loadingComponent ? loadingComponent : <ActivityIndicator animating size='large' color='#ddd' /> }
                </View>
            );
        } else if (!loading && data.length === 0) {
            return (
                <View>
                    { emptyComponent ? emptyComponent : <Text>Data Not Found</Text> }
                </View>
            );
        }

        return null;
    };


    return (
        <>
            <FlatList
                ref={ refContainer }
                data={ formatData(data, numColumns) }
                renderItem={ ({ item, index }) => renderRow(item, index) }
                keyExtractor={ (item, index) => 'key' + index.toString() }
                numColumns={ numColumns }
                refreshControl={ <RefreshControl refreshing={ refreshing } onRefresh={ pullToRefresh } /> }
                onEndReached={ onLoadMore }
                onEndReachedThreshold={ 0.1 }
                onScroll={ checkScroll }
                ListHeaderComponent={ headerComponent && headerComponent }
                ListFooterComponent={ renderFooter }
                ItemSeparatorComponent={ separatorComponent && separatorComponent }
            />
            { scrollToTop ? offset > 100 ?
                <TouchableOpacity onPress={ goToIndex } style={ [Styles.button.bottom, bottomIndicatorStyle] }>
                    { IconBottomIndicator ? IconBottomIndicator : <Icon name='rocket' size={ 30 } color='#ffffff' /> }
                </TouchableOpacity> : null : null }
        </>
    );
};



ListView.prototype = {
    data: PropTypes.array,
    renderRow: PropTypes.func,
    onLoadMore: PropTypes.func,
    pullToRefresh: PropTypes.func,
    onScroll: PropTypes.func,
    refreshing: PropTypes.bool,
    loading: PropTypes.bool,
    scrollToTop: PropTypes.bool,
    numColumns: PropTypes.number,
    bottomIndicatorStyle: PropTypes.object,
    IconBottomIndicator: PropTypes.element,
    headerComponent: PropTypes.element,
    separatorComponent: PropTypes.element,
    emptyComponent: PropTypes.element,
    loadingComponent: PropTypes.element,
};

ListView.defaultProps = {
    data: null,
    children: null,
    onLoadMore: () => { },
    refreshing: false,
    scrollToTop: false,
    numColumns: 0,
    IconBottomIndicator: null,
    headerComponent: null,
    loadingComponent: null,
    separatorComponent: null,
};



export default ListView;




