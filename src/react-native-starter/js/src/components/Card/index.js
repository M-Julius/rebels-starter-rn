import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './style';

const Card = props => {
  const {
    children,
    onPress,
    style,
    centerStyle,
    imageContent,
    backgroundColor,
    shadowStyle,
    borderRadius,
    title,
    content,
    flexDirection,
    titleStyle,
    contentStyle,
    buttonContent,
    buttonContainer,
  } = props;
  const customStyle = {
    backgroundColor,
    borderRadius,
    flexDirection,
  };
  const handleButton =  buttonContent ? Styles.card.padding.bottom : null;
  return (
    <View style={ [Styles.container, customStyle, shadowStyle, style, handleButton] }>
      { imageContent || title || contentStyle || buttonContent ?
      <>
      <TouchableOpacity onPress={ onPress }>
      { imageContent ? imageContent : null }
      { title  ?
        <View style={ centerStyle }>
          <Text style={ titleStyle }>{ title }</Text>
          { content ? <Text style={ contentStyle }>{ content }</Text> : null }
        </View> : null }
      </TouchableOpacity>
      { buttonContent ?
      <View style={ buttonContainer ? buttonContainer : Styles.card.padding.horizontal }>
      { buttonContent }
      </View> : null }
      </>
       : children }
    </View>
  );
};

Card.prototype = {
  children: PropTypes.element,
  onPress: PropTypes.func,
  style: PropTypes.object,
  centerStyle: PropTypes.object,
  imageContent: PropTypes.element,
  titleStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  buttonContent: PropTypes.element,
  buttonContainer: PropTypes.object,
  backgroundColor: PropTypes.string,
  shadowStyle: PropTypes.object,
  borderRadius: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  flexDirection: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  onPress: () => {},
  style: null,
  imageContent: null,
  backgroundColor: '',
  shadowStyle: null,
  borderRadius: 8,
  title: null,
  content: null,
  contentStyle: null,
  buttonContent: null,
  
};

export default Card;
