import { Image } from 'expo-image';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Easing, Notifier, NotifierComponents } from 'react-native-notifier';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore (click)</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Prueba las Notificaciones</ThemedText>
        <ThemedText>Toca los botones para ver diferentes tipos de notificaciones:</ThemedText>

        <View style={styles.notificationButtonsContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => {
              Notifier.showNotification({
                title: '',
                description: 'Hello! Can you help me with notifications?',
                duration: 0,
                showAnimationDuration: 800,
                showEasing: Easing.bounce,
                hideOnPress: false,
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Notificación Personalizada
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.successButton}
            onPress={() => {
              Notifier.showNotification({
                title: 'Éxito',
                description: 'Esta es una notificación de éxito',
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'success',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Notificación de Éxito
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.errorButton}
            onPress={() => {
              Notifier.showNotification({
                title: 'Error',
                description: 'Algo salió mal, por favor intenta de nuevo',
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'error',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Notificación de Error
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.warningButton}
            onPress={() => {
              Notifier.showNotification({
                title: 'Advertencia',
                description: 'Esta es una notificación de advertencia',
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'warn',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Notificación de Advertencia
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => {
              Notifier.showNotification({
                title: 'Información',
                description: 'Nueva información disponible',
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'info',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Notificación de Info
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 4: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  notificationButtonsContainer: {
    gap: 12,
    marginTop: 8,
  },
  customButton: {
    backgroundColor: '#2b2b2bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  successButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  errorButton: {
    backgroundColor: '#F44336',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  warningButton: {
    backgroundColor: '#FF9800',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
