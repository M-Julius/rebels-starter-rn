import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
  container: {
    flex: -1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.white.default,
    // borderWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },

  left: {
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'transparent',
      // borderWidth: 1,
    },

    innerContainer: {
      flex: -1,
      height: 40,
      minWidth: 50,
      paddingLeft: 8,
      justifyContent: 'center',
      // borderWidth: 1,
    },

    icon: {
      textAlign: 'left',
    },

    text: [
      GlobalStyles.textRegular(),
      {
        flex: -1,
        paddingLeft: 3,
        // borderWidth: 1,
      },
    ],
  },

  right: {
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'transparent',
      // borderWidth: 1,
    },

    innerContainer: {
      flex: -1,
      height: 40,
      paddingTop: 2,
      justifyContent: 'center',
      minWidth: 50,
      paddingRight: 8,
      // borderWidth: 1,
    },

    innerContainer2: {
      flex: -1,
      height: 40,
      paddingTop: 2,
      justifyContent: 'center',
      // borderWidth: 1,
    },

    icon: {
      textAlign: 'right',
    },

    text: [
      GlobalStyles.textRegular(),
      {
        flex: -1,
        paddingRight: 3,
        // borderWidth: 1,
      },
    ],

    notif: {
      container: {
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.orange.preset1,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: 3,
      },

      text: GlobalStyles.textBold(RatioHelper.normalize(12), Colors.white.default, 'center'),
    },
  },

  middle: {
    container: {
      flex: -1,
      height: 40,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1,
    },

    image: {
      width: 18,
      height: 20,
    },

    text: [
      GlobalStyles.textBold(RatioHelper.normalize(14)),
    ],

    logo: {
      width: 72,
      height: 31,
    },
  },
};
