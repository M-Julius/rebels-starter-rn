import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
  container: (containerColor = Colors.orange.preset1, altCSS = false, height = 45, width = RatioHelper.screenWidth - 40, disabled = false) => {
    return {
      flex: -1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: altCSS ? Colors.white.default : (disabled ? Colors.grey.borderOpacity : containerColor),
      borderRadius: 5,
      borderWidth: altCSS ? 1 : 0,
      borderColor: altCSS ? Colors.orange.preset1 : null,
      opacity: disabled ? 0.2 : 1,
    };
  },

  text: (textColor = Colors.white.default, altCSS = false, fontSize = RatioHelper.normalize(14), disabled = false) => [
    GlobalStyles.textBold(),
    {
      fontSize: fontSize,
      color: altCSS ? Colors.orange.preset1 : (disabled ? Colors.black.opacityHalf : textColor),
    },
  ],
};
