import {
  RatioHelper,
} from 'helpers';

export default {
  container: {
    flex: -1,
    height: RatioHelper.screenHeight,
    width: RatioHelper.screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
  },

  loaderIllustrationImage: {
    width: 300,
    height: 300,
  },

  closeContainer: {
    flex: -1,
    position: 'absolute',
    top: RatioHelper.screenHeight / 5,
    // borderWidth: 1,
  },

  description: {
    marginTop: 10,
    textAlign: 'center',
  }
};
