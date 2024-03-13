import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import Home from '../Pages/Home';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default memo(Navigation);
