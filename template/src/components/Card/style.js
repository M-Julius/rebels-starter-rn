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
      // flex: -1,
      flexDirection: 'row',
      backgroundColor: Colors.white.default,
      borderWidth: 0,
    },
  ],
  card: {
    padding: {
      bottom: { paddingBottom: 15 },
      horizontal: { paddingHorizontal: 15 },
    },
  },
};
