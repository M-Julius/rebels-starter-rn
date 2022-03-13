import {
  RatioHelper,
} from 'helpers';

import Colors from './Colors';

// ! set base font size
const baseFontSize = 14;

const settings = {
	// Default fonts
	primaryFont: {
		light     : '../../assets/fonts/OpenSans-Light',
		regular   : '../../assets/fonts/OpenSans-Regular',
		semiBold  : '../../assets/fonts/OpenSans-SemiBold',
		bold      : '../../assets/fonts/OpenSans-Bold',
		extraBold : '../../assets/fonts/OpenSans-ExtraBold',
		italic    : '../../assets/fonts/OpenSans-Italic',
	},

	// Add another font option if needed, if not keep primary font references
	secondaryFont: {
		light     : '../../assets/fonts/OpenSans-Light',
		regular   : '../../assets/fonts/OpenSans-Regular',
		semiBold  : '../../assets/fonts/OpenSans-SemiBold',
		bold      : '../../assets/fonts/OpenSans-Bold',
		extraBold : '../../assets/fonts/OpenSans-ExtraBold',
		italic    : '../../assets/fonts/OpenSans-Italic',
	},

	fontSize: {
		small   : RatioHelper.normalize(baseFontSize * 0.8),  // 11px
		default : RatioHelper.normalize(baseFontSize),        // 14px
		large   : RatioHelper.normalize(baseFontSize * 1.5),  // 21px
		xLarge  : RatioHelper.normalize(baseFontSize * 2.5),  // 35px
	},

	letterSpacing: 0.5,
};



export default {
	text: {
		small: () => {
			return {
				fontFamily    : settings.primaryFont.regular,
				fontSize      : settings.fontSize.small,
				letterSpacing : settings.letterSpacing,
			};
		},
		regular: () => {
			return {
				fontFamily    : settings.primaryFont.regular,
				fontSize      : settings.fontSize.default,
				letterSpacing : settings.letterSpacing,
			};
		},
		large: () => {
			return {
				fontFamily    : settings.primaryFont.regular,
				fontSize      : settings.fontSize.large,
				letterSpacing : settings.letterSpacing,
			};
		},
	},

	title: {
		small: () => {
			return {
				fontFamily    : settings.primaryFont.bold,
				fontSize      : settings.fontSize.small,
				letterSpacing : settings.letterSpacing,
				fontWeight    : 'bold',

			};
		},
		regular: () => {
			return {
				fontFamily    : settings.primaryFont.bold,
				fontSize      : settings.fontSize.default,
				letterSpacing : settings.letterSpacing,
				fontWeight    : 'bold',

			};
		},
		large: () => {
			return {
				fontFamily    : settings.primaryFont.bold,
				fontSize      : settings.fontSize.large,
				letterSpacing : settings.letterSpacing,
				fontWeight    : 'bold',

			};
		},
	},

	// ! ===============================
	// ! Backward Compatibility (delete after all components have been updated)
	// ! ===============================
	osBold      : '../../assets/fonts/OpenSans-Bold',
	osSemiBold  : '../../assets/fonts/OpenSans-SemiBold',
	osExtraBold : '../../assets/fonts/OpenSans-ExtraBold',
	osRegular   : '../../assets/fonts/OpenSans-Regular',
	osLight     : '../../assets/fonts/OpenSans-Light',
	osItalic    : '../../assets/fonts/OpenSans-Italic',
};
