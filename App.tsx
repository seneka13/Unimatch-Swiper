import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HeartIcon from './src/assets/icons/heart.svg';
import UsersIcon from './src/assets/icons/users.svg';
import WalletIcon from './src/assets/icons/wallet.svg';
import MainScreen from './src/MainScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({size}) => {
            if (route.name === 'Home') {
              return <HeartIcon width={size} height={size} />;
            } else if (route.name === 'Settings') {
              return <WalletIcon width={size} height={size} />;
            } else if (route.name === 'Profile') {
              return <UsersIcon width={size} height={size} />;
            }
          },
          tabBarActiveTintColor: 'lightblue',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {backgroundColor: '#171717'},
          headerStyle: {backgroundColor: '#171717'},
        })}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Settings" component={MainScreen} />
        <Tab.Screen name="Profile" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
