import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNModal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from 'consts';
import Container from '../Container';
import Text from '../Text';
import Button from '../Button';

const Modal = ({ 
  children, 
  closeModal,
  title,
  isVisible = false, 
  type = 'alert',
  animationInTiming = 300,
  animationOutTiming = 300,
  backdropOpacity = 0.4,
  swipeToClose = false, 
  propagateSwipe = false,
}) => {
  const props = {
    isVisible,
    onBackdropPress: closeModal,
    onSwipeComplete: closeModal,
    hideModalContentWhileAnimating: true,
    backdropOpacity,
    propagateSwipe,
    animationInTiming,
    animationOutTiming,
    style: {
      ...Style.modalContainer,
      ...Style.bottom(type),
    }
  }

  let content;
  if (type === 'screen') {
    content = () => (
      <Container
        header = {{
          // middleText: title,
          rightButton: 'close',
          rightButtonSize: 30,
          onPressRight: closeModal
        }}
      >
        { children }
      </Container>
    );
  } else if (type === 'bottom') {
    swipeToClose && (props.swipeDirection = 'down');
    content = () => (
      <View style={ Style.bottomContainer }>
        <View style={Style.swipeBar} />
        <Text
          size='m'
          mb={5}
          text={title}
        />

        {children}
      </View>
    );
  } else if (type === 'alert') {
    props.animationIn='zoomIn';
    props.animationOut='zoomOut';
    swipeToClose && (props.swipeDirection = ['down', 'up', 'left', 'right']);

    content = () => (
      <View style={ Style.alert.container }>
        <View style={Style.alert.headerContainer}>
          <Text
            size='m'
            mb={20}
            text={title}
          />
          <Ionicons
            name='close'
            size={24}
            onPress={closeModal}
            // style={{position: 'absolute', right: 10, top: 10}}
          />
        </View>
        {children}
        {/* <View style={Style.alert.footerContainer}>
          <Button
            // text='Cancel'
            containerColor={Colors.button.primary.background}
            width='50%'
            style={{ marginRight: 20}}
          />
          <Button
            containerColor={Colors.button.primary.background}
            // text='Ok'
            width='50%'
          />
        </View> */}
      </View>
    );
  }

  return (
    <RNModal {...props}>
      {content()}
    </RNModal>
  );
}

const Style = {
  modalContainer: {
    margin: 0
  },
  bottom: (type) => ({
    justifyContent: type === 'bottom' ? 'flex-end' : 'center',
  }),

  contentContainer: {
    backgroundColor: Colors.bg.default,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  bottomContainer: {
    backgroundColor: Colors.bg.default,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  alert: {
    container: {
      backgroundColor: Colors.bg.default,
      padding: 20,
      marginHorizontal: 20,
      borderRadius: 10
    },

    headerContainer: { 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },

    footerContainer: {
      marginTop: 20,
      flexDirection: 'row'
    },
  },

  swipeBar: {
    height: 3,
    width: 20,
    backgroundColor: '#D0D0D0',
    borderRadius: 50,
    position: 'absolute',
    alignSelf: 'center',
    top: 5,
  }
};

export default Modal;