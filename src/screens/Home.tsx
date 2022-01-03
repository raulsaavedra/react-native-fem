import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';
import { SContainer } from '../components/Base/SLayout';
import { SHeadingTertiary, SText } from '../components/Base/STypography';

type TProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function Home({ navigation }: TProps) {
  const onPress = () => {
    navigation.navigate('Colors');
  };
  return (
    <SContainer spaceTop>
      <TouchableOpacity onPress={() => onPress()}>
        <SHeadingTertiary>
          Solarized Palette <SText css={{ color: 'red' }}>➔</SText>
        </SHeadingTertiary>
      </TouchableOpacity>
    </SContainer>
  );
}
