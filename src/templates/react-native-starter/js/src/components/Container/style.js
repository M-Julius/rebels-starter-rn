import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.white.default,
  },

  container: (noPaddingTop, noPaddingBottom, noPaddingHorizontal) => {
    let paddingTop = 20;
    let paddingBottom = 30;
    let paddingHorizontal = 20;

    if (noPaddingTop) {
      paddingTop = 0;
    }

    if (noPaddingBottom) {
      paddingBottom = 0;
    }

    if (noPaddingHorizontal) {
      paddingHorizontal = 0;
    }

    return {
      flex: 1,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingHorizontal: paddingHorizontal,
      backgroundColor: Colors.white.default,
    };
  },
};
