import { LogBox } from 'react-native';

// Silenciar warnings específicos ANTES que cualquier otra importación
LogBox.ignoreLogs([
  'SafeAreaView has been deprecated and will be removed in a future release',
  'SafeAreaView has been deprecated',
  'react-native-safe-area-context',
  /SafeAreaView.*deprecated/,
  /deprecated.*SafeAreaView/,
]);

// Forzar recarga del LogBox
LogBox.install();

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NotifierWrapper } from 'react-native-notifier';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <NotifierWrapper>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{ presentation: 'modal', title: 'Modal title' }}
              />
            </Stack>
            <StatusBar style="auto" />
          </NotifierWrapper>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
