import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
  border_variant_1,
} from '@/constants/colors';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const mockAvatar1 = require('../../assets/images/img-8.jpg');
const mockAvatar2 = require('../../assets/images/img-10.png');
const mockAvatar3 = require('../../assets/images/img-11.png');
const mockAvatar4 = require('../../assets/images/img-12.png');

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <SafeAreaView
      className='flex-1 justify-center items-center flex-col w-full'
      style={{ backgroundColor: background_variant_1 }}
    >
      <ScrollView
        className='flex flex-1 w-full min-h-screen'
        style={styles.safePadding}
      >
        {/* <View
          className='flex flex-1 px-3'
          style={{ backgroundColor: background_variant_1 }}
        > */}
        <View
          className='header flex flex-row justify-between items-center w-full 
        py-3 px-3 mb-[5px]'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View className='flex flex-row gap-x-8 items-center'>
            <Pressable onPress={() => router.push('/')}>
              <Ionicons
                name='arrow-back-outline'
                size={22}
                color={text_variant_1}
              />
            </Pressable>
            <Text
              className='text-[18px]'
              style={{ fontFamily: 'font_500', color: text_variant_1 }}
            >
              Settings
            </Text>
          </View>
          {/* <Ionicons name='grid-outline' size={22} color={text_variant_1} /> */}
        </View>
        <View
          className='profile-info pt-3 px-3 pb-4 flex flex-row items-center gap-x-4 
          border-b'
          style={{ borderBottomColor: border_variant_1 }}
        >
          <Image
            style={{
              width: 70,
              objectFit: 'contain',
              height: 70,
              borderRadius: 50,
            }}
            source={mockAvatar1}
            // resizeMethod='scale'
            accessibilityLabel='user avatar'
          />
          <View className='flex justify-between'>
            <Text
              className='text-[16px]'
              style={{ color: text_variant_1, fontFamily: 'font_600' }}
            >
              Sam Kim
            </Text>
            <Text
              className='text-[12px] mt-[3px]'
              style={{ color: text_variant_1, fontFamily: 'font_200' }}
            >
              The user status goes here.
            </Text>
          </View>
        </View>
        <View className='settings-options mt-[10px] w-full'>
          <Link href='/profile' asChild>
            <Pressable className='px-3 py-3 flex flex-row items-center gap-x-6'>
              <Ionicons
                name='person-outline'
                size={22}
                color={text_variant_1}
              />
              <View className='flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_500' }}
                >
                  Profile
                </Text>
                <Text
                  className='text-[11px] mt-[3px]'
                  style={{ color: text_variant_1, fontFamily: 'font_200' }}
                >
                  profile avatar, status, and user-name.
                </Text>
              </View>
            </Pressable>
          </Link>

          <View className='profile px-3 py-3 flex flex-row items-center gap-x-6'>
            <Ionicons
              name='color-palette-outline'
              size={22}
              color={text_variant_1}
            />
            <View className='flex justify-between'>
              <Text
                className='text-[14px]'
                style={{ color: text_variant_1, fontFamily: 'font_500' }}
              >
                Theme
              </Text>
              <View className='flex flex-row items-center justify-between gap-x-6 w-[85%]'>
                <View className='w-[95%]'>
                  <Text
                    className='text-[11px] mt-[3px]'
                    style={{ color: text_variant_1, fontFamily: 'font_200' }}
                  >
                    Toggle between dark and light mode select your preferred
                    theme.
                  </Text>
                </View>
                <View className='w-[5%]'>
                  <Switch
                    value={isDarkMode}
                    // trackColor={{ false: '#1d1d2b', true: '#CDCDE0' }}
                    trackColor={{ false: '#CDCDE0', true: '#CDCDE0' }}
                    thumbColor='#FFA001'
                    onValueChange={() =>
                      setIsDarkMode((previousState) => !previousState)
                    }
                    // ios_backgroundColor='#3e3e3e'
                  />
                </View>
              </View>
            </View>
          </View>
          <Pressable
            className='px-3 py-3 flex flex-row items-center gap-x-6'
            onPress={() => router.push('/log-in')}
          >
            <Ionicons
              name='stop-circle-outline'
              size={22}
              color={text_variant_1}
            />
            <View className='flex justify-between'>
              <Text
                className='text-[14px]'
                style={{ color: text_variant_1, fontFamily: 'font_500' }}
              >
                Log out
              </Text>
              <Text
                className='text-[11px] mt-[3px]'
                style={{ color: text_variant_1, fontFamily: 'font_200' }}
              >
                Just in case you wish to end a logged-in session
              </Text>
            </View>
          </Pressable>
          <Link href='/wallet-settings' asChild>
            <Pressable className='px-3 py-3 flex flex-row items-center gap-x-6'>
              <Ionicons
                name='wallet-outline'
                size={22}
                color={text_variant_1}
              />
              <View className='flex justify-between'>
                <Text
                  className='text-[14px]'
                  style={{ color: text_variant_1, fontFamily: 'font_500' }}
                >
                  Wallet settings
                </Text>
                <Text
                  className='text-[11px] mt-[3px]'
                  style={{ color: text_variant_1, fontFamily: 'font_200' }}
                >
                  set you address, and discover other wallet-related settings.
                </Text>
              </View>
            </Pressable>
          </Link>
        </View>

        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: background_variant_1,
  },
});
