import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenOne from './Screens/ScreenOne';
import ScreenTwo from './Screens/ScreenTwo';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ScreenOne" component={screenOne} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}