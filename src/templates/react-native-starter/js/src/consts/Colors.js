/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
const color = {
	white: {
		default     : 'rgb(255, 255, 255)',
		opacity     : 'rgba(255, 255, 255, 0.8)',
		opacityHalf : 'rgba(255, 255, 255, 0.5)',
		opacityLow  : 'rgba(255, 255, 255, 0.1)',
	},
	black: {
		default     : '#333333',
		opacity     : 'rgba(0, 0, 0, 0.8)',
		opacityHalf : 'rgba(0, 0, 0, 0.5)',
		opacityLow  : 'rgba(0, 0, 0, 0.1)',
	},
	grey: {
		light   : 'rgb(230,230,230)',
		default : 'rgb(128, 128, 128)',
		dark    : 'rgb(138, 138, 138)',
	},
  // Add custom variable to each color as needed
	red: {
		default: 'rgb(255, 0, 0)',
	},
	blue: {
		default: 'rgb(0, 0, 255)',
	},
	yellow: {
		default: 'rgb(255, 255, 0)',
	},
	green: {
		default: 'rgb(0, 128, 0)',
	},
	orange: {
		default: 'rgb(255, 165, 0)',
	},
	pink: {
		default: 'rgb(255, 192, 203)',
  },
};

// Set the primary and secondary colors here
const primary = color.black.default;
const secondary = color.white.default;

export default {
	primary   : primary,   // change this color above
	secondary : secondary, // change this color above

	bg: {
		default : color.white.default,
		header  : primary,
	},

	// Text colors
	header   : primary,
	subtitle : color.grey.light,
	text     : {
		default : color.grey.default,
		lightBg : color.grey.default,
	},
	link: color.blue.default,

	// Actions colors
	actions: {
		success : color.green.default,
		info    : color.yellow.default,
		caution : color.orange.default,
		error   : color.red.default,
	},

	// Button colors
	button: {
		primary: {
			background : primary,
			text       : color.white.default,
		},
		secondary: {
			background : secondary,
			text       : color.black.default,
		},
	},

	border: {
		default: color.black.default,
	},

  // ! ===============================
	// ! bof: Depreciated: Do not use the variables below
	// ! ===============================
	white: {
		default     : 'rgb(255, 255, 255)',
		opacity     : 'rgba(255, 255, 255, 0.8)',
		opacityHalf : 'rgba(255, 255, 255, 0.5)',
		opacityLow  : 'rgba(255, 255, 255, 0.1)',
	},
	black: {
		default     : 'rgb(0, 0, 0)',
		opacity     : 'rgba(0, 0, 0, 0.8)',
		opacityHalf : 'rgba(0, 0, 0, 0.5)',
		opacityLow  : 'rgba(0, 0, 0, 0.1)',
	},
	grey: {
		light   : 'rgb(230,230,230)',
		default : 'rgb(128, 128, 128)',
		dark    : 'rgb(138, 138, 138)',
	},
	red: {
		default: 'rgb(255, 0, 0)',
	},
	blue: {
		default: 'rgb(0, 0, 255)',
		lightBlue: 'rgb(135,206,250)',
	},
	yellow: {
		default: 'rgb(255, 255, 0)',
	},
	green: {
		default: 'rgb(0, 128, 0)',
	},
	orange: {
		default: 'rgb(255, 165, 0)',
	},
	pink: {
		default: 'rgb(255, 192, 203)',
  },
  // ! ===============================
	// ! eof: Depreciated
	// ! ===============================
};
