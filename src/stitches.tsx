import { createStitches } from 'stitches-native';

export const { styled, css } = createStitches({
  theme: {
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
  },
  utils: {
    fullBleed: (value: boolean) => {
      if (value) {
        return {
          marginLeft: -20,
          marginRight: -20,
        };
      }
      return {};
    },
    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    br: (value: number) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value,
    }),
  },
});
