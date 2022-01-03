import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { styled } from '../stitches';
import { SText } from './Base/STypography';

const SColorBox = styled(TouchableOpacity, {
  px: 16,
  py: 8,
  br: 4,
  marginBottom: 8,
});
const SColorsText = styled(SText, {
  fontWeight: 'bold',
});

export default function ColorBox({
  color,
  textColor,
  children,
  onPress,
}: {
  color: string;
  textColor?: string;
  children: ReactNode;
  onPress?: () => void;
}) {
  return (
    <SColorBox css={{ backgroundColor: color }} onPress={onPress}>
      <SColorsText css={{ color: textColor || '#fff' }}>{children}</SColorsText>
    </SColorBox>
  );
}
