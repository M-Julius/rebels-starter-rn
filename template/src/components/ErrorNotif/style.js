import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
	container: {
    flex: 1,
    width: RatioHelper.screenWidth - 40,
    minHeight: 50,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.red.error,
    position: 'absolute',
    top: RatioHelper.platformScale(45, 15),
    borderRadius: 8,
  },

  message: {
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      // borderWidth: 1,
    },

    text: GlobalStyles.textBold(RatioHelper.normalize(12), Colors.red.preset1),
  },

  dismissButton: {
    container: {
      flex: -1,
      width: 40,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
    },

    text: {
      // borderWidth: 1,
      paddingTop: 2,
    },
  },

};
