import {
  RatioHelper,
} from '../helpers';

import Colors from './Colors';

// ! set base font size
const baseFontSize = 14;

const settings = {
	// Default fonts
	primaryFont: {
		light     : '../assets/fonts/Manrope-Light.ttf',
		regular   : '../assets/fonts/Manrope-Regular.ttf',
		semiBold  : '../assets/fonts/Manrope-SemiBold.ttf',
		bold      : '../assets/fonts/Manrope-Bold.ttf',
		extraBold : '../assets/fonts/Manrope-ExtraBold.ttf',
	},

	// Add another font option if needed, if not keep primary font references
	secondaryFont: {
		light     : '../assets/fonts/Manrope-Light.ttf',
		regular   : '../assets/fonts/Manrope-Regular.ttf',
		semiBold  : '../assets/fonts/Manrope-SemiBold.ttf',
		bold      : '../assets/fonts/Manrope-Bold.ttf',
		extraBold : '../assets/fonts/Manrope-ExtraBold.ttf',
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
	mrBold      : '../assets/fonts/Manrope-Bold',
	mrSemiBold  : '../assets/fonts/Manrope-SemiBold',
	mrExtraBold : '../assets/fonts/Manrope-ExtraBold',
	mrRegular   : '../assets/fonts/Manrope-Regular',
	mrLight     : '../assets/fonts/Manrope-Light',
};
