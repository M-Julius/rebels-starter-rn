import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import {
  Images,
} from 'consts';

import Header from '../Header';
import BottomNotif from '../BottomNotif';
import ErrorNotif from '../ErrorNotif';
import Modal from '../Modal';

import Styles from './style';

const Container = props => {
  // const [modalIsOpened, setModalIsOpened] = useState(false);

  // useEffect(() => {
  //   NetInfo.fetch().then(connectionInfo => {
  //     if (connectionInfo.type === 'none' || !connectionInfo.isConnected) {
  //       setModalIsOpened(true);
  //     } else {
  //       setModalIsOpened(false);
  //     }
  //   });
  // }, []);

  // const renderModalNoConnection = () => {
  //   if (modalIsOpened) {
  //     return (
  //       <Modal
  //         type={ 'info' }
  //         height={ 320 }
  //         style={ { padding: 30 } }
  //         modalIsOpened={ modalIsOpened }
  //         onPressClose={ () => setModalIsOpened(false) }
  //         buttonText={ 'Retry' }
  //         image={ Images.ic_no_internet }
  //         title={ 'Tidak ada koneksi Internet' }
  //         desc={ 'Silahkan periksa koneksi internetmu dan coba lagi.' }
  //         onPress={ () => setModalIsOpened(false) }
  //       />
  //     );
  //   }
  //
  //   return null;
  // };

  const renderContent = () => {
    return (
      <View style={ [Styles.container(props.noPaddingTop, props.noPaddingBottom, props.noPaddingHorizontal), props.style] } >
        { props.children }
      </View>
    );
  };

  const renderHeader = () => {
    if (props.header) {
      return (
        <Header { ...props.header }/>
      );
    }

    return null;
  };

  const renderBottomNotif = () => {
    if (props.bottomNotif) {
      return (
        <BottomNotif { ... props.bottomNotif }/>
      );
    }

    return null;
  };

  const renderErrorNotif = () => {
    if (props.errorNotif) {
      return (
        <ErrorNotif { ...props.errorNotif }/>
      );
    }

    return null;
  };

  return (
    <View style={ Styles.outerContainer }>

      <SafeAreaView style={ Styles.outerContainer }>

        { renderHeader() }

        { renderContent() }

      </SafeAreaView>

      { renderBottomNotif() }

      { renderErrorNotif() }

    </View>
  );
};

export default Container;
