import {
  RatioHelper,
} from 'helpers';

import {
  Colors,
  GlobalStyles,
} from 'consts';

export default {
	container: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 80,
    backgroundColor: Colors.orange.preset1Opacity,
  },

  text: GlobalStyles.textBold(RatioHelper.normalize(12), Colors.orange.preset1),
};
