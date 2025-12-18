import { LogBox } from 'react-native';

// Configuración de LogBox más agresiva - SILENCIAR TODOS los warnings de SafeAreaView
LogBox.ignoreLogs([
  "SafeAreaView has been deprecated and will be removed in a future release. Please use 'react-native-safe-area-context' instead. See https://github.com/th3rdwave/react-native-safe-area-context",
  'SafeAreaView has been deprecated and will be removed in a future release',
  'SafeAreaView has been deprecated',
  'SafeAreaView',
  'react-native-safe-area-context',
]);

// Configuración global para suprimir warnings específicos
if (__DEV__) {
  const originalWarn = console.warn;
  console.warn = (message, ...args) => {
    if (
      typeof message === 'string' &&
      (message.includes('SafeAreaView') ||
        message.includes('deprecated') ||
        message.includes('react-native-safe-area-context'))
    ) {
      return; // Silenciar estos warnings
    }
    originalWarn(message, ...args);
  };
}

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
