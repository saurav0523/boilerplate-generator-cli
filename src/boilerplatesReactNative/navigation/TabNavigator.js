import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import your screens here

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
