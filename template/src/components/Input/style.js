import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
  container: {
    marginBottom: 15,
    // borderWidth: 1,
  },

  animatedPlaceholder: {
    container: translate => {
      return {
        flex: -1,
        height: 20,
        position: 'absolute',
        top: 13,
        transform: [
          { translateY: translate },
        ],
        // borderWidth: 1,
      };
    },

    text: (size, color, fontWeight, placeholderColor) => {
      return [
        GlobalStyles.textRegular(),
        {
          fontSize: size,
          color: color.interpolate({
            inputRange: [0, 1],
            outputRange: placeholderColor ? [Colors.grey.border, placeholderColor] : [Colors.grey.border, Colors.orange.preset1],
          }),
          fontWeight: fontWeight,
        },
      ];
    },
  },

  input: {
    container: (state, value, editable = true) => {
      return {
        flex: -1,
        height: 50,
        paddingLeft: 0,
        width: RatioHelper.screenWidth - 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: ((state || !!value) && editable) ? Colors.orange.preset1 : Colors.grey.borderOpacity,
        backgroundColor: Colors.white.default,
        // borderWidth: 1,
      };
    },

    text: [
      GlobalStyles.textRegular(),
      {
        // borderWidth: 1,
      },
    ],
  },
};
