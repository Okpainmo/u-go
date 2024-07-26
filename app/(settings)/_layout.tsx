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

// const CustomComponent = () => (
//   <View
//     className='header flex flex-row justify-between items-center
//     py-2'
//     style={{ backgroundColor: background_variant_1_light }}
//   >
//     <View className='flex flex-row items-center'>
//       <Pressable onPress={() => router.back()}>
//         <Ionicons name='arrow-back-outline' size={22} color={text_variant_1} />
//       </Pressable>
//       <View className='chat-card flex flex-row items-center gap-x-4 ml-3'>
//         <Image
//           style={{
//             width: 50,
//             objectFit: 'contain',
//             height: 50,
//             borderRadius: 50,
//           }}
//           source={mockAvatar4}
//           // resizeMethod='scale'
//           accessibilityLabel='user avatar'
//         />
//         <View className='chat-info-wrapper flex justify-between'>
//           <Text
//             className='text-[16px]'
//             style={{ color: text_variant_1, fontFamily: 'font_600' }}
//           >
//             Judith Ham
//           </Text>
//         </View>
//       </View>
//     </View>
//     {/* <Ionicons name='grid-outline' size={22} color={text_variant_1} /> */}
//   </View>
// );

function ChatLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='settings'
        // options={{
        //   headerLeft: () => <CustomComponent />,
        //   headerStyle: { backgroundColor: background_variant_1_light },
        // }}
      />
      <Stack.Screen
        name='wallet-settings'
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
