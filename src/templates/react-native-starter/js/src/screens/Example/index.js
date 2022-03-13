import React from 'react';
import { View, Text, Alert, Image, Button, Dimensions, ActivityIndicator, TextInput } from 'react-native';
import { Card, ListView, Container } from 'components';
import Icon from 'react-native-vector-icons/AntDesign';

const REACT_APP_API_KEY = '51eccbf205ac5712b41444ee69c0d6ac';
const REACT_APP_API_URL = 'https://api.themoviedb.org/3';
const REACT_APP_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


const titleStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
};

const centerStyle = {
    padding: 15,
};

const contentStyle = {
    fontSize: 12,
    color: '#000',
};

const imageStyle = {
    height: 200,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 0,
};

const imageOnCard = {
    height: 250,
    resizeMode: 'stretch',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
};

const marginTop = {
    marginTop: 20,
};

const cardWrapper = {
    width: Dimensions.get('screen').width / 2,
    flex: 1,
    margin: 5,
};
const datas = [
    {
        'poster_path': '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
        'adult': false,
        'overview': 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
        'release_date': '2016-08-03',
        'genre_ids': [
            14,
            28,
            80,
        ],
        'id': 297761,
        'original_title': 'Suicide Squad',
        'original_language': 'en',
        'title': 'Suicide Squad',
        'backdrop_path': '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
        'popularity': 48.261451,
        'vote_count': 1466,
        'video': false,
        'vote_average': 5.91,
    },
];


const Example = () => {
    const [refresh, setRefresh] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const similarMovie = () => {
            fetch(REACT_APP_API_URL + `/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`)
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                })
                .then(data => {
                    setData(prevState => {
                        if (data.page > 1) {
                            setRefresh(false);
                            return [...prevState, ...data.results];
                        } else { return data.results; }
                    });
                    setLoading(false);
                })
                .catch(err => {
                    return err;
                });
        };

        similarMovie();
    }, [page]);

    const renderItem = (obj = datas[0]) => {
        if (obj.isEmpty) {
            return (
                <View style={ {
                    backgroundColor: 'transparent',
                    width: Dimensions.get('screen').width / 2,
                } } />
            );
        }
        return (
            <Card
                style={ [marginTop, cardWrapper] }
                onPress={ () => Alert.alert(obj.title) }
                flexDirection='column'
                title={ obj.title }
                content={ obj.overview }
                centerStyle={ centerStyle }
                titleStyle={ titleStyle }
                contentStyle={ contentStyle }
                imageContent={ <Image source={ { uri: REACT_APP_IMAGE_URL + obj.poster_path } } style={ imageOnCard } /> }
                buttonContent={ <Button title='press' onPress={ () => Alert.alert(obj.title) } /> }
            />
        );
    };

    const pullToRefresh = () => {
        if (page > 1) {
            setRefresh(true);
            setPage(1);
            setLoading(true);
        }
    };

    return (
        <Container style={ {
            paddingHorizontal: 0,
        } }>
            <ListView
                data={ data }
                numColumns={ 2 }
                renderRow={ item => renderItem(item) }
                refreshing={ refresh }
                loading={ loading }
                onLoadMore={ () => {
                    setPage(page + 1);
                    setLoading(true);
                } }
                pullToRefresh={ () => {
                    pullToRefresh();
                } }
                scrollToTop={ true }
                bottomIndicatorStyle={ {
                    backgroundColor: 'red',
                } }
                IconBottomIndicator={ <Icon name='up' size={ 30 } color='#000000' /> }
                emptyComponent={ <Text>Data tidak tersedia</Text> }
                loadingComponent={ <ActivityIndicator animating size='large' color='#000' /> }
                headerComponent={ <TextInput placeholder='input disini' /> }
            />
        </Container>
    );
};

export default Example;





{ /* <ScrollView showsVerticalScrollIndicator={false}>
                <Card
                    style={[marginTop]}
                    onPress={() => Alert.alert('ok')}
                    flexDirection='column'
                    title='title'
                    content={lorem}
                    centerStyle={centerStyle}
                    titleStyle={titleStyle}
                    contentStyle={contentStyle}
                    imageContent={<Image source={imageSource} style={imageStyle} />}
                    buttonContent={<Button title='press' onPress={() => Alert.alert('pressed')} />}
                />
                <Card
                    style={[marginTop, { marginBottom: 10, paddingBottom: 15 }]}
                >
                    <View >
                        <Image source={imageSource} style={imageStyle} />
                        <Text>Hello</Text>
                        <Button title='press' />
                    </View>
                </Card>
            </ScrollView> */ }
