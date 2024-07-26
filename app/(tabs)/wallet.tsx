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

const Wallet = () => {
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
        <View
          className='header flex flex-row justify-between items-center w-full 
        py-3 px-3 mb-[5px]'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View className='flex flex-row gap-x-8 items-center'>
            <Pressable onPress={() => router.back()}>
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
              Wallet
            </Text>
          </View>
          <Link href='/wallet-settings'>
            <Ionicons name='cog-outline' size={25} color={text_variant_1} />
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: background_variant_1,
  },
});
