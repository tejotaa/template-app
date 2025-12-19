import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          {t('exploreTitle')}
        </ThemedText>
      </ThemedView>
      <ThemedText>{t('exploreDescription')}</ThemedText>
      <Collapsible title={t('fileBasedRouting')}>
        <ThemedText>
          {t('twoScreensDescription')}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> {t('and')}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          {t('layoutDescription')}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText> {t('setsUpTab')}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">{t('learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('androidIosWeb')}>
        <ThemedText>
          {t('openProject')} <ThemedText type="defaultSemiBold">w</ThemedText> {t('inTerminal')}
        </ThemedText>
      </Collapsible>
      <Collapsible title={t('images')}>
        <ThemedText>
          {t('staticImages')} <ThemedText type="defaultSemiBold">@2x</ThemedText> {t('and')}{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> {t('toProvideFiles')}
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">{t('learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('lightDarkMode')}>
        <ThemedText>
          {t('templateSupport')} <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>{' '}
          {t('useColorScheme')}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">{t('learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('animations')}>
        <ThemedText>
          {t('templateIncludes')}{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText>{' '}
          {t('usesLibrary')}{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          {t('toCreateWaving')}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              {t('theComponent')}{' '}
              <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              {t('providesParallax')}
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
