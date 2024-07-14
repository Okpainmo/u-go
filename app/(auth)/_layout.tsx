import React from 'react';
import { Stack } from 'expo-router';

function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='log-in'
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='sign-up'
        options={{
          // Set the presentation mode to modal for our modal route.
          // presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default AuthLayout;
