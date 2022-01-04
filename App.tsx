import { Platform, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Colors from './src/screens/Colors';
import { styled } from './src/stitches';
import Home from './src/screens/Home';
import SingleColor from './src/screens/SingleColor';
import { TColor, TColorList } from './lib/types';

const SSafeAreaView = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '#fff',
});

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: {};
  Colors: { colorList: TColorList };
  Color: { paletteName: string; color: TColor };
};

export default function App() {
  return (
    <SSafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Colors" component={Colors} />
          <Stack.Screen name="Color" component={SingleColor} />
        </Stack.Navigator>
      </NavigationContainer>
    </SSafeAreaView>
  );
}
