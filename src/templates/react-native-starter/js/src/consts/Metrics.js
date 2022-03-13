/**
 * This file contains metric values that are global to the application.
 */

import {  Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Examples of metrics you can define:
export const tiny   = 5;
export const small  = tiny * 2; // 10
export const normal = tiny * 3; // 15
export const medium = normal * 2; // 30

export default {
  // Default spacing
  tiny: tiny,
  small: small,
  normal: normal,
  medium: medium,

  // Screen width measurements
  screenWidth: {
    full: screenWidth,
    padded: screenWidth - (normal * 2),
  },
  
  // Margin settings
  marginBottom: {
    default: normal,
  },

  marginVertical: {
    default: normal,
  },

  marginHorizontal: {
    default: normal,
  },

  // Padding settings
  paddingVertical: {
    default: normal,
  },

  paddingHorizontal: {
    default: normal,
  },

  paddingBottom: {
    default: normal,
  },
};
