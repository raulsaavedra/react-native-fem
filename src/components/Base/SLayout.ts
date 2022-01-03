import { View } from 'react-native';
import { styled } from '../../stitches';

export const SContainer = styled(View, {
  paddingLeft: 17,
  paddingRight: 17,
  variants: {
    spaceTop: {
      true: {
        marginTop: 15,
      },
    },
    flex: {
      true: {
        flex: 1,
      },
    },
  },
});
export const SFlex = styled(View, {
  variants: {
    flex: {
      true: {
        flex: 1,
      },
    },
  },
});
