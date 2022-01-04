import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList } from 'react-native';
import { RootStackParamList } from '../../App';
import { TColor } from '../../lib/types';
import { SContainer } from '../components/Base/SLayout';
import { SHeadingTertiary } from '../components/Base/STypography';
import ColorBox from '../components/ColorBox';

type TProps = NativeStackScreenProps<RootStackParamList, 'Colors'>;
export default function Colors({ route, navigation }: TProps) {
  const { colorList } = route.params;

  const handleColorPress = (color: TColor) => {
    navigation.navigate('Color', { paletteName: colorList.paletteName, color });
  };
  return (
    <SContainer spaceTop>
      <FlatList
        data={colorList.colors}
        keyExtractor={(item) => item.hexCode}
        ListHeaderComponent={
          <SHeadingTertiary css={{ marginBottom: 10 }}>
            {colorList.paletteName}
          </SHeadingTertiary>
        }
        renderItem={({ item }) => (
          <ColorBox
            color={item.hexCode}
            onPress={() => {
              handleColorPress(item);
            }}
            textColor={
              parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
                ? '#000'
                : '#fff'
            }
          >
            {item.colorName} {item.hexCode}
          </ColorBox>
        )}
      />
    </SContainer>
  );
}
