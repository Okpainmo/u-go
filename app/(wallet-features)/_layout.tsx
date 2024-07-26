import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
const mockAvatar4 = require('../../assets/images/img-12.png');
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

function ChatLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='market-overview'
        // options={{
        //   headerLeft: () => <CustomComponent />,
        //   headerStyle: { backgroundColor: background_variant_1_light },
        // }}
      />
      <Stack.Screen
        name='manage-tokens'
        // options={{
        //   headerLeft: () => <CustomComponent />,
        //   headerStyle: { backgroundColor: background_variant_1_light },
        // }}
      />
      <Stack.Screen
        name='[tokenId]'
        // options={{
        //   headerLeft: () => <CustomComponent />,
        //   headerStyle: { backgroundColor: background_variant_1_light },
        // }}
      />
    </Stack>
  );
}

export default ChatLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginLeft: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfoWrapper: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    color: '#000', // Replace with your text_variant_1 color
    fontFamily: 'font_600', // Ensure 'font_600' is defined in your project
  },
});
