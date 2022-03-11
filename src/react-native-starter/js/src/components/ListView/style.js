import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
  container: [
    GlobalStyles.shadow,
    {
      flex: -1,
      flexDirection: 'row',
      backgroundColor: Colors.white.default,
      borderRadius: 8,
      borderWidth: 0,
    },
  ],
  button: {
    bottom: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 50,
      height: 50,
      borderRadius: 100,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderColor: '#ddd',
      borderWidth: 1,
    },
  },
};
