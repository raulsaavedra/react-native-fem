import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { RootStackParamList } from '../../App';
import { SContainer } from '../components/Base/SLayout';
import { SText } from '../components/Base/STypography';
import { styled } from '../stitches';

type TProps = NativeStackScreenProps<RootStackParamList, 'Color'>;
const SBackground = styled(View, {
  py: 12,
  px: 16,
  marginTop: 8,
});
export default function SingleColor({ route }: TProps) {
  const { colorHex, colorName } = route.params;
  return (
    <SContainer spaceTop>
      <SText>Color Name: {colorName}</SText>
      <SText>Color Code: {colorHex}</SText>
      <SBackground css={{ backgroundColor: colorHex }} />
    </SContainer>
  );
}
