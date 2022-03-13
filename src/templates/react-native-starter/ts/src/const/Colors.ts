export const colour = {
    black100: "#171717",
    black4: "rgba(0, 0, 0, 0.04)",
    white: "#FFFFFF",
    grey100: "#8A8A8A",
    grey80: "#AAAAAA",
    grey50: "#EAEAEA",
    gray: "#707070",
    greyBg: "#F5F5F5",
    orangePanorama: "#F58220",
    orange200: "rgba(245, 130, 32, 0.08)",
    orangeDisable: "rgba(245, 130, 32, 0.48)",
    yellow: "#FFE600",
    // white: {
	// 	default     : 'rgb(255, 255, 255)',
	// 	opacity     : 'rgba(255, 255, 255, 0.8)',
	// 	opacityHalf : 'rgba(255, 255, 255, 0.5)',
	// 	opacityLow  : 'rgba(255, 255, 255, 0.1)',
	// },
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
	// yellow: {
	// 	default: 'rgb(255, 255, 0)',
	// },
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
const primary = colour.black.default;
const secondary = colour.white;

export default {
	primary   : primary,   // change this color above
	secondary : secondary, // change this color above

	bg: {
		default : colour.white,
		header  : primary,
	},

	// Text colours
	header   : primary,
	subtitle : colour.grey.light,
	text     : {
		default : colour.grey.default,
		lightBg : colour.grey.default,
	},
	link: colour.blue.default,

	// Actions colours
	actions: {
		success : colour.green.default,
		info    : colour.yellow,
		caution : colour.orange.default,
		error   : colour.red.default,
	},

	// Button colours
	button: {
		primary: {
			background : primary,
			text       : colour.white,
		},
		secondary: {
			background : secondary,
			text       : colour.black.default,
		},
	},

	border: {
		default: colour.black.default,
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
}