import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';
import { TColor, TColorList } from '../../lib/types';
import { SContainer, SFlex } from '../components/Base/SLayout';
import { SHeadingTertiary, SText } from '../components/Base/STypography';
import { styled } from '../stitches';

type TProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const SPalettePreview = styled(SFlex, {
  px: 30,
  py: 30,
  marginRight: 10,
  marginBottom: 10,
});
export default function Home({ navigation }: TProps) {
  const [palettes, setPalettes] = React.useState<TColorList[]>([]);
  const getPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes'
    );
    if (response.ok) {
      const palettesData = await response.json();
      setPalettes(palettesData);
    }
  }, []);
  useEffect(() => {
    getPalettes();
  }, [getPalettes]);
  /*  const palettes = [
    {
      paletteName: 'Solarized',
      colors: [
        { colorName: 'Base03', hexCode: '#002b36' },
        { colorName: 'Base02', hexCode: '#073642' },
        { colorName: 'Base01', hexCode: '#586e75' },
        { colorName: 'Base00', hexCode: '#657b83' },
        { colorName: 'Base0', hexCode: '#839496' },
        { colorName: 'Base1', hexCode: '#93a1a1' },
        { colorName: 'Base2', hexCode: '#eee8d5' },
        { colorName: 'Base3', hexCode: '#fdf6e3' },
        { colorName: 'Yellow', hexCode: '#b58900' },
        { colorName: 'Orange', hexCode: '#cb4b16' },
        { colorName: 'Red', hexCode: '#dc322f' },
        { colorName: 'Magenta', hexCode: '#d33682' },
        { colorName: 'Violet', hexCode: '#6c71c4' },
        { colorName: 'Blue', hexCode: '#268bd2' },
        { colorName: 'Cyan', hexCode: '#2aa198' },
        { colorName: 'Green', hexCode: '#859900' },
      ],
    },
    {
      paletteName: 'Rainbow',
      colors: [
        { colorName: 'Red', hexCode: '#FF0000' },
        { colorName: 'Orange', hexCode: '#FF7F00' },
        { colorName: 'Yellow', hexCode: '#FFFF00' },
        { colorName: 'Green', hexCode: '#00FF00' },
        { colorName: 'Violet', hexCode: '#8B00FF' },
      ],
    },
    {
      paletteName: 'Frontend Masters',
      colors: [
        { colorName: 'Red', hexCode: '#c02d28' },
        { colorName: 'Black', hexCode: '#3e3e3e' },
        { colorName: 'Grey', hexCode: '#8a8a8a' },
        { colorName: 'White', hexCode: '#ffffff' },
        { colorName: 'Orange', hexCode: '#e66225' },
      ],
    },
  ]; */
  const onPress = (colorList: TColorList) => {
    navigation.navigate('Colors', { colorList });
  };
  const first5Colors = (colors: TColor[]) => colors.slice(0, 5);
  return (
    <SContainer spaceTop>
      <FlatList
        data={palettes}
        keyExtractor={(colorList) => colorList.paletteName}
        renderItem={({ item: colorList }) => (
          <TouchableOpacity onPress={() => onPress(colorList)}>
            <SHeadingTertiary css={{ marginBottom: 10 }}>
              {colorList.paletteName}
            </SHeadingTertiary>
            <FlatList
              data={first5Colors(colorList.colors)}
              keyExtractor={(color) => color.hexCode}
              horizontal
              renderItem={({ item: color }) => (
                <SPalettePreview css={{ backgroundColor: color.hexCode }} />
              )}
            />
          </TouchableOpacity>
        )}
      />
    </SContainer>
  );
}
