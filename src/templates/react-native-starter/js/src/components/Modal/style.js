import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNModal from 'react-native-modal';

import Text from '../Text';

const Modal = ({ children, isVisible, closeModal, type, title, swipeBar, swipeAble, propagateSwipe }) => {
  const props = {
    isVisible,
    onBackdropPress: closeModal,
    onSwipeComplete: closeModal,
    backdropOpacity: 0.4,
    hideModalContentWhileAnimating: true,
    propagateSwipe,
    style: {
      ...Style.modalContainer,
      ...(type === 'bottom' && Style.bottom)
    }
  }

  let content;
  if (type === 'screen') {
    content = () => children;
  } else {
    swipeAble && (props.swipeDirection = 'down');
    content = () => (
      <View
        style={{
          ...Style.bottomContainer,
          paddingTop: swipeBar ? normalize(30) : normalize(20)
        }}
      >
        {swipeBar && <View style={Style.swipeBar} />}

        <View style={themes.rowCenterBetween}>
          <Text
            size='m'
            color='yobenBlue'
            mb={5}
            text={title}
          />

          {!swipeBar &&
            <Button type='text' onPress={closeModal}>
              <IcX size={16} />
            </Button>
          }
        </View>
        {children}
      </View>
    );
  }

  return (
    <RNModal {...props}>
      {content()}
    </RNModal>
  );
}

const Style = StyleSheet.create({
  modalContainer: {
    margin: 0
  },
  bottom: {
    justifyContent: 'flex-end',
  },

  contentContainer: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  bottomContainer: {
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});

export default Modal;