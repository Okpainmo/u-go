import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcons } from '@/constants/Icons';
import {
  background_variant_1,
  background_variant_2,
  background_variant_1_light,
  text_variant_1,
} from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import UnreadChatsTabMenuIndicator from '@/components/UnreadChatsTabMenuIndicator';
import { View } from 'react-native';
import LoggedInTabMenuProfileContent from '@/components/LoggedInTabMenuProfileContent';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: `${background_variant_2}`,
        tabBarInactiveTintColor: `${text_variant_1}`,
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          paddingTop: 5,
          paddingBottom: 3,
          fontFamily: 'font_500',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: `${background_variant_1_light}`,
          borderTopWidth: 1,
          borderTopColor: '#232533',
          minHeight: 60,
          // paddingVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <View className='relative'>
              <TabBarIcons
                name={
                  focused
                    ? 'chatbubble-ellipses'
                    : 'chatbubble-ellipses-outline'
                }
                color={color}
                size={23}
              />
              <UnreadChatsTabMenuIndicator />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='wallet'
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'wallet' : 'wallet-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'You',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcons
            //   name={focused ? 'person-circle' : 'person-circle-outline'}
            //   color={color}
            //   size={27}
            // />
            <LoggedInTabMenuProfileContent />
          ),
        }}
      />
    </Tabs>
  );
}
