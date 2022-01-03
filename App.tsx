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

const SSafeAreaView = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '#fff',
});

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  Colors: undefined;
  Color: { colorHex: string; colorName: string };
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
