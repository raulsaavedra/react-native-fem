import React from 'react';
import { FlatList } from 'react-native';
import { SContainer } from '../components/Base/SLayout';
import { SHeadingTertiary } from '../components/Base/STypography';
import ColorBox from '../components/ColorBox';

type TProps = NativeStackScreenProps<RootStackParamList, 'Colors'>;
export default function Colors({ navigation }: Props) {
  const colors = [
    { colorName: 'Base03', colorHex: '#002b36' },
    { colorName: 'Base02', colorHex: '#073642' },
    { colorName: 'Base01', colorHex: '#586e75' },
    { colorName: 'Base00', colorHex: '#657b83' },
    { colorName: 'Base0', colorHex: '#839496' },
    { colorName: 'Base1', colorHex: '#93a1a1' },
    { colorName: 'Base2', colorHex: '#eee8d5' },
    { colorName: 'Base3', colorHex: '#fdf6e3' },
    { colorName: 'Yellow', colorHex: '#b58900' },
    { colorName: 'Orange', colorHex: '#cb4b16' },
    { colorName: 'Red', colorHex: '#dc322f' },
    { colorName: 'Magenta', colorHex: '#d33682' },
    { colorName: 'Violet', colorHex: '#6c71c4' },
    { colorName: 'Blue', colorHex: '#268bd2' },
    { colorName: 'Cyan', colorHex: '#2aa198' },
    { colorName: 'Green', colorHex: '#859900' },
  ];

  const handleColorPress = (color: { colorName: string; colorHex: string }) => {
    navigation.navigate('Color', color);
  };
  return (
    <SContainer spaceTop>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorHex}
        ListHeaderComponent={
          <SHeadingTertiary css={{ marginBottom: 10 }}>
            Solarized
          </SHeadingTertiary>
        }
        renderItem={({ item }) => (
          <ColorBox
            color={item.colorHex}
            onPress={() => {
              handleColorPress(item);
            }}
            textColor={
              parseInt(item.colorHex.replace('#', ''), 16) > 0xffffff / 1.1
                ? '#000'
                : '#fff'
            }
          >
            {item.colorName} {item.colorHex}
          </ColorBox>
        )}
      />
    </SContainer>
  );
}
