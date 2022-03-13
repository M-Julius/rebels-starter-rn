import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';

import {
  RatioHelper,
} from 'helpers';
import {
  Colors,
} from 'consts';

import Styles from './style';

const Input = props => {
  const [translate, setTranslate] = useState(new Animated.Value(0));
  const [color, setColor] = useState(new Animated.Value(0));
  const [size, setSize] = useState(new Animated.Value(RatioHelper.normalize(14)));
  const [fontWeight, setFontWeight] = useState('normal');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (props.value) {
      startAnimation();
    }
  }, [props.value]); // eslint-disable-line react-hooks/exhaustive-deps

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: -30,
        duration: 150,
        useNativeDriver: false,
      }),

      Animated.timing(color, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),

      Animated.timing(size, {
        toValue: RatioHelper.normalize(12),
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    setFontWeight('600');
    setIsFocused(true);
  };

  const stopAnimation = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }),

      Animated.timing(color, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),

      Animated.timing(size, {
        toValue: RatioHelper.normalize(14),
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    setFontWeight('normal');
    setIsFocused(false);
  };

  const handleFocus = () => {
    startAnimation();

    props.onFocus ? props.onFocus() : null;
  };

  const handleBlur = () => {
    if (!props.value) {
      stopAnimation();
    }

    props.onBlur ? props.onBlur() : null;
  };

  const inputRef = React.createRef();

  const handleRef = () => {
    inputRef.current.focus();
  };

  const renderTextInput = () => {
    return (
      <View style={ [Styles.container, props.containerStyle] }>
        <TextInput
          style={ [Styles.input.container(isFocused), Styles.input.text, props.style] }
          onFocus={ handleFocus }
          onBlur={ handleBlur }
          placeholder={ isFocused ? '' : props.placeholder }
          placeholderTextColor={ props.placeholderTextColor ? props.placeholderTextColor : Colors.grey.border }
          keyboardType={ props.keyboardType }
          returnKeyType={ props.returnKeyType }
          onSubmitEditing={ props.onSubmitEditing }
          onChangeText={ props.onChangeText }
          value={ props.value }
          maxLength={ props.maxLength }
          multiline={ !!props.multiline }
          secureTextEntry={ props.secureTextEntry }
          autoCapitalize={ props.autoCapitalize }
          autoCorrect={ false }
          autoGrow={ true }
          autoFocus={ props.autoFocus }
          spellCheck={ false }
          underlineColorAndroid={ 'transparent' }
          editable={ props.editable }
          selectionColor={ Colors.orange.preset1 }
          onKeyPress={ props.onKeyPress }
        />
      </View>
    );
  };

  const renderAnimatedTextInput = () => {
    return (
      <View style={ Styles.container }>

        <TextInput
          ref={ inputRef }
          style={ [Styles.input.container(isFocused, props.value, props.editable), Styles.input.text, props.style] }
          onFocus={ handleFocus }
          onBlur={ handleBlur }
          placeholder={ isFocused ? '' : '' }
          placeholderTextColor={ props.placeholderTextColor ? props.placeholderTextColor : Colors.grey.border }
          keyboardType={ props.keyboardType }
          returnKeyType={ props.returnKeyType }
          onSubmitEditing={ props.onSubmitEditing }
          onChangeText={ props.onChangeText }
          value={ props.value }
          maxLength={ props.maxLength }
          multiline={ !!props.multiline }
          secureTextEntry={ props.secureTextEntry }
          autoCapitalize={ props.autoCapitalize }
          autoCorrect={ false }
          autoGrow={ true }
          autoFocus={ props.autoFocus }
          spellCheck={ false }
          underlineColorAndroid={ 'transparent' }
          editable={ props.editable }
          selectionColor={ Colors.orange.preset1 }
          onKeyPress={ props.onKeyPress }
        />

        { renderAnimatedPlaceHolder() }

      </View>
    );
  };

  const renderAnimatedPlaceHolder = () => {
    if (!props.noPlaceholder) {
      return (
        <Animated.View style={ Styles.animatedPlaceholder.container(translate) }>
          <TouchableOpacity onPress={ handleRef  } activeOpacity={ 1 }>
            <Animated.Text style={ Styles.animatedPlaceholder.text(size, color, fontWeight, props.placeholderTextColor) }>
              { props.placeholder }
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      );
    }

    return null;
  };

  if (props.default) {
    return renderTextInput();
  } else {
    return renderAnimatedTextInput();
  }
};

export default Input;
