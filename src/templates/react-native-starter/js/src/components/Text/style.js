import { RatioHelper } from 'helpers';
import { Colors } from 'consts';

export default {
  bold: {
    // fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
  },
  semiBold: {
    // fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
  },
  regular: {
     // fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  xxs: {
    fontSize: RatioHelper.normalize(10),
    lineHeight: RatioHelper.normalize(14),
  },
  xs: {
    fontSize: RatioHelper.normalize(12),
    lineHeight: RatioHelper.normalize(16),
  },
  s: {
    fontSize: RatioHelper.normalize(14),
    lineHeight: RatioHelper.normalize(20),
  },
  m: {
    fontSize: RatioHelper.normalize(16),
    lineHeight: RatioHelper.normalize(22),
  },
  l: {
    fontSize: RatioHelper.normalize(20),
    lineHeight: RatioHelper.normalize(26),
  },
  xl: {
    fontSize: RatioHelper.normalize(24),
    lineHeight: RatioHelper.normalize(32),
  },
  xxl: {
    fontSize: RatioHelper.normalize(32),
    lineHeight: RatioHelper.normalize(36),
  },
  color: (color) => ({
    color,
  }),
  align: (textAlign) => ({
    textAlign,
  }),
  spacing: (letterSpacing) => ({
    letterSpacing
  }),
  decoration: (textDecorationLine) => ({
    textDecorationLine
  }),
  mb: (mb) => ({
    marginBottom: mb,
  }),
  mt: (mt) => ({
    marginTop: mt,
  }),
  mr: (mr) => ({
    marginRight: mr,
  }),
  ml: (ml) => ({
    marginLeft: ml,
  }),
  mh: (mh) => ({
    marginHorizontal: mh,
  }),
  mv: (mv) => ({
    marginVertical: mv,
  }),
}