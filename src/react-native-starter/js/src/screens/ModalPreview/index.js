import React, { useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import Languages from 'languages'
import { Container, Text, Modal } from 'components';
import {Colors} from 'consts';

import Styles from './style';

const TextScreen = props => {
  const [modalBottomVisible, setModalBottomVisible] = useState(false);
  const [modalBottomScrollVisible, setModalBottomScrollVisible] = useState(false);
  const [modalScreenVisible, setModalScreenVisible] = useState(false);
  const [modalAlertVisible, setModalAlertVisible] = useState(false);

  function closeModal() {
    setModalBottomVisible(false);
    setModalBottomScrollVisible(false);
    setModalScreenVisible(false);
    setModalAlertVisible(false);
  };

  return (
    <Container style={ Styles.container }>
      <Text
        onPress={() => setModalBottomVisible(true)}
        text='Modal Bottom'
        mb={20}
      />
      
      <Text
        onPress={() => setModalBottomScrollVisible(true)}
        text='Modal Bottom With Scrollable Component'
        mb={20}
      />

      <Text
        onPress={() => setModalAlertVisible(true)}
        text='Alert Modal'
        mb={20}
      />
      
      <Text
        onPress={() => setModalScreenVisible(true)}
        text='Full Screen Modal'
      />

      {/* MODAL BOTTOM */}
      <Modal
        isVisible={modalBottomVisible}
        swipeToClose
        closeModal={closeModal}
        type='bottom'
        title='Bottom Modal!'
      >
        <Text 
          color={Colors.black.default}
          text={Languages.loremIpsum}
          mt={20}
        />
        <Text 
          color={Colors.black.default}
          text={Languages.loremIpsum}
          mt={20}
        />
      </Modal>
      {/* MODAL BOTTOM */}

      {/* MODAL BOTTOM WITH SCROLLABLE COMPONENT */}
      <Modal
        isVisible={modalBottomScrollVisible}
        swipeToClose
        closeModal={closeModal}
        type='bottom'
        scrollableContent
        title='Bottom Modal!'
        propagateSwipe={true}
      >
      <View style={{ height: 400 }}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View flex={1} onStartShouldSetResponder={() => true}>
            <Text 
              color={Colors.black.default}
              text={Languages.loremIpsum}
              mt={20}
            />
            <Text 
              color={Colors.black.default}
              text={Languages.loremIpsum}
              mt={20}
            />
            <Text 
              color={Colors.black.default}
              text={Languages.loremIpsum}
              mt={20}
            />
            <Text 
              color={Colors.black.default}
              text={Languages.loremIpsum}
              mt={20}
            />
            <Text 
              color={Colors.black.default}
              text={Languages.loremIpsum}
              mt={20}
            />
            <Text 
              color={Colors.black.default}
              numberOfLines={3}
              mt={20}
              text={Languages.loremIpsum}
            />
          </View>
          </ScrollView>
        </View>
      </Modal>
      {/* MODAL BOTTOM WITH SCROLLABLE COMPONENT */}

      {/* Alert MODAL */}
      <Modal
        isVisible={modalAlertVisible}
        swipeToClose
        closeModal={closeModal}
        title='Alert Modal!'
      >
        <Text 
          color={Colors.black.default}
          text={Languages.loremIpsum}
        />
        <Text 
          color={Colors.black.default}
          numberOfLines={3}
          mt={20}
          text={Languages.loremIpsum}
        />
      </Modal>
      {/* Alert MODAL */}

      {/* FULL SCREEN MODAL */}
      <Modal
        isVisible={modalScreenVisible}
        swipeAble={true}
        closeModal={closeModal}
        title='Full Screen Modal!'
        type='screen'
      >
        <Text 
          color={Colors.black.default}
          text={Languages.loremIpsum}
        />
        <Text 
          color={Colors.black.default}
          numberOfLines={3}
          mt={20}
          text={Languages.loremIpsum}
        />
      </Modal>
      {/* FULL SCREEN MODAL */}
    </Container>
  );
};

export default TextScreen;
