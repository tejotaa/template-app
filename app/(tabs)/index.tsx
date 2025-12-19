import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Easing, Notifier, NotifierComponents } from 'react-native-notifier';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { t } = useTranslation();

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
        <ThemedText type="title">{t('welcome')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('step1')}</ThemedText>
        <ThemedText>
          {t('editFile')} <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          {t('pressDeveloperTools')}.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">{t('step2')}</ThemedText>
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

        <ThemedText>{t('tapExploreTab')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('step3')}</ThemedText>
        <ThemedText>{t('tryNotifications')}</ThemedText>

        <View style={styles.notificationButtonsContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => {
              Notifier.showNotification({
                title: '',
                description: t('notificationTitle'),
                duration: 0,
                showAnimationDuration: 800,
                showEasing: Easing.bounce,
                hideOnPress: false,
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {t('customNotification')}
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.successButton}
            onPress={() => {
              Notifier.showNotification({
                title: t('successTitle'),
                description: t('successDescription'),
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'success',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {t('successNotification')}
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.errorButton}
            onPress={() => {
              Notifier.showNotification({
                title: t('errorTitle'),
                description: t('errorDescription'),
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'error',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {t('errorNotification')}
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.warningButton}
            onPress={() => {
              Notifier.showNotification({
                title: t('warningTitle'),
                description: t('warningDescription'),
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'warn',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {t('warningNotification')}
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => {
              Notifier.showNotification({
                title: t('infoTitle'),
                description: t('infoDescription'),
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'info',
                },
              });
            }}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {t('infoNotification')}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('step4')}</ThemedText>
        <ThemedText>
          {t('resetProject')} <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
          {t('toGetFresh')} <ThemedText type="defaultSemiBold">app</ThemedText> {t('fresh')}{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> {t('toCurrent')}{' '}
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
