import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Colors,
  Images,
} from 'consts';
import Styles from './style';

const Header = props => {
  const renderLeftButton = () => {
    if (props.leftButton) {
      return (
        <Ionicons
          style={ Styles.left.icon }
          name={ props.leftButton }
          color={
            props.leftButtonColor
            ? props.leftButtonColor
            : Colors.grey.default
          }
          size={
            props.leftButtonSize
            ? props.leftButtonSize
            : 35
          }
          onPress={
            props.onPressLeftMenu
            ? props.onPressLeftMenu
            : undefined
          }
        />
      );
    }

    if (props.leftText) {
      return <Text style={ [Styles.left.text, props.leftTextStyle] }>{ props.leftText }</Text>;
    }

    return null;
  };

  const renderMiddleContent = () => {
    if (props.middleImage) {
      return <Image style={ Styles.middle.logo } source={ props.middleImage }/>;
    }

    if (props.middleText) {
      return <Text style={ Styles.middle.text } >{ props.middleText }</Text>;
    }

    return null;
  };

  const renderRightButton = () => {
    if (props.rightButton) {
      return (
        <Ionicons
          style={ Styles.right.icon }
          name={ props.rightButton }
          color={
            props.rightButtonColor
            ? props.rightButtonColor
            : Colors.grey.default
          }
          size={
            props.rightButtonSize
            ? props.rightButtonSize
            : 35
          }
          onPress={
            props.onPressRightMenu && !props.rightButton2
            ? props.onPressRightMenu
            : undefined
          }
        />
      );
    }

    if (props.rightText) {
      return <Text style={ [Styles.right.text, props.rightTextStyle] }>{ props.rightText }</Text>;
    }

    return null;
  };

  const renderRightButton2 = () => {
    if (props.rightButton2) {
      return (
        <Ionicons
          style={ Styles.right.icon }
          name={ props.rightButton2 }
          color={
            props.rightButton2Color
            ? props.rightButton2Color
            : Colors.grey.default
          }
          size={
            props.rightButton2Size
            ? props.rightButton2Size
            : 35
          }
          onPress={
            props.onPressRightMenu
            ? props.onPressRightMenu
            : undefined
          }
        />
      );
    }

    return null;
  };

  const renderNotification = () => {
    if (props.notifLength) {
      return (
        <View style={ Styles.right.notif.container }>
          <Text style={ Styles.right.notif.text }>{ props.notifLength }</Text>
        </View>
      );
    }

    return null;
  };
  return (
    <View style={ Styles.container }>
      <View style={ Styles.left.container }>
        <TouchableOpacity
          style={ [Styles.left.innerContainer, props.leftButtonContainerStyle ? props.leftButtonContainerStyle : {}] }
          onPress={ props.onPressLeft }
        >
          { renderLeftButton() }
        </TouchableOpacity>
      </View>

      <View style={ Styles.middle.container }>
        { renderMiddleContent() }
      </View>

      <View style={ Styles.right.container }>
        <TouchableOpacity
          style={ [Styles.right.innerContainer, props.rightButtonContainerStyle ? props.rightButtonContainerStyle : {}] }
          onPress={ props.onPressRight }
        >
          { renderRightButton() }
        </TouchableOpacity>

        <TouchableOpacity
          style={ [Styles.right.innerContainer2, props.rightButton2ContainerStyle ? props.rightButton2ContainerStyle : {}] }
          onPress={ props.onPressRight2 }
        >
          { renderRightButton2() }
          { /* { renderNotification() } */ }
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
