import {
  RatioHelper,
} from '../helpers';

import {colour} from './Colors';
import Fonts from './Fonts';

export default {
  paddingTop: 20,
  paddingBottom: 30,

  textRegular: (fontSize = RatioHelper.normalize(14), color = colour.black.default, textAlign = 'left') => {
		return {
			fontSize: fontSize,
			fontFamily: Fonts.osRegular,
			color: color,
			textAlign: textAlign,
			// lineHeight: 22,
			letterSpacing: 0.3,
		};
	},

  textSemiBold: (fontSize = RatioHelper.normalize(14), color = colour.black.default, textAlign = 'left') => {
		return {
			fontSize: fontSize,
			fontFamily: Fonts.osSemiBold,
			color: color,
			textAlign: textAlign,
			// lineHeight: 22,
			letterSpacing: 0.3,
		};
	},

	textBold: (fontSize = RatioHelper.normalize(24), color = colour.black.default, textAlign = 'left') => {
		return {
			fontSize: fontSize,
			fontFamily: Fonts.osBold,
			fontWeight: 'bold',
			color: color,
			textAlign: textAlign,
			// lineHeight: 22,
			letterSpacing: 0.3,
		};
	},

  textSemiTitle: (marginTop = 20, marginBottom = 20) => {
    return {
      fontSize: RatioHelper.normalize(18),
      fontFamily: Fonts.osBold,
      fontWeight: 'bold',
      color: colour.black.default,
      letterSpacing: 0.3,
      marginTop: marginTop,
      marginBottom: marginBottom,
    };
  },

  textDescription: (marginTop = 10, marginBottom = 20) => {
    return {
      fontSize: RatioHelper.normalize(14),
      fontFamily: Fonts.osRegular,
      color: colour.grey,
      letterSpacing: 0.3,
      marginTop: marginTop,
      marginBottom: marginBottom,
    };
  },

  shadow: {
		shadowOpacity: 0.1,
		shadowRadius: 5,
		shadowOffset: {
			height: 3,
			width: 0,
		},
		elevation: 1,
		borderWidth: RatioHelper.platformScale(0, 0.2),
		borderColor: colour.grey,
		backgroundColor: colour.white,
	},

  separator: {
    flex: -1,
    borderColor: colour.grey,
    borderBottomWidth: 1,
    marginVertical: 15,
  },

  iconTextContainer: {
    flex: -1,
    width: 35,
    marginRight: -5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
};
