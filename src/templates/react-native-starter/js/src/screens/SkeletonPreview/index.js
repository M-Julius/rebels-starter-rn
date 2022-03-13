import React, { useState } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Container, Skeleton } from 'components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from './style';
import { Actions } from 'react-native-router-flux';

const SkeletonPreview = () => {
  const [profileLoading, setProfileLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);

  const renderProfile = () => (
    <>
      {/* This is an example where you use Skeleton as a wrapper and hide the children when the prop 'active' is false */ }
      <View style={ Styles.headerContainer }>

        <Skeleton
          active={ profileLoading }
          style={ Styles.backgroundImage }
        >
          <Image
            style={ Styles.backgroundImage }
            source={ {
              uri:
                'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?size=626&ext=jpg',
            } }
          />
        </Skeleton>

        <Skeleton
          active={ profileLoading }
          style={ Styles.avatar }
        >
          <Image
            style={ Styles.avatar }
            source={ {
              uri:
                'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
            } }
          />
        </Skeleton>

      </View>

      <View style={ Styles.profileInfoContainer }>

        <Skeleton active={ profileLoading } style={ Styles.title }>
          <Text style={ Styles.title }>Username</Text>
        </Skeleton>

        <Skeleton active={ profileLoading } style={ Styles.description }>
          <Text style={ Styles.description }>This is a description</Text>
        </Skeleton>

      </View>
    </>
  );

  const renderButtons = () => (
    <View style={ Styles.buttonContainer }>

      <TouchableOpacity style={ Styles.button } onPress={ () => setProfileLoading(!profileLoading) }>
        <Text style={ Styles.buttonText }>{ profileLoading ? 'Stop Profile Loading' : 'Show Profile Loading' }</Text>
      </TouchableOpacity>

      <TouchableOpacity style={ Styles.button } onPress={ () => setItemLoading(!itemLoading) }>
        <Text style={ Styles.buttonText }>{ itemLoading ? 'Stop Item Loading' : 'Show Item Loading' }</Text>
      </TouchableOpacity>

    </View>
  );

  const renderItems = () => {
    // This is an example when you use if statement to write the Skeleton version separately
    if (itemLoading) {
      return <>
        {/* This is an example where you use style object to style the Skeleton component */ }
        <View style={ Styles.itemContainer }>

          <Skeleton style={ Styles.itemImage } />

          <View>
            <Skeleton style={ Styles.title } />
            <Skeleton width={ 200 } style={ Styles.description } />
          </View>

        </View>
        {/* This is an example where you use props to style the Skeleton component the same */ }
        <View style={ Styles.itemContainer }>

          <Skeleton
            animate={ false }
            width={ 80 }
            height={ 80 }
            borderRadius={ 5 }
            mr={ 10 }
          />

          <View>
            <Skeleton animate={ false } height={ 20 } mb={ 5 } />
            <Skeleton animate={ false } width={ 200 } />
          </View>

        </View>
      </>;
    } else {
      return [...Array(2).keys()].map(key => (
        <View key={ key } style={ Styles.itemContainer }>

          <Image
            style={ Styles.itemImage }
            source={ {
              uri:
                'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458',
            } }
          />

          <View>
            <Text style={ Styles.title }>Item</Text>
            <Text style={ Styles.description }>This is a description for the item</Text>
          </View>

        </View>
      ));
    }
  };

  return (
    <Container style={ Styles.container }>

      { renderProfile() }

      { renderButtons() }

      { renderItems() }

      <View style={ Styles.buttonContainer }>

        <TouchableOpacity style={ Styles.button } onPress={ () => Actions.pop() }>
          <Text style={ Styles.buttonText }>back</Text>
        </TouchableOpacity>

      </View>

    </Container>
  );
};

export default SkeletonPreview;
