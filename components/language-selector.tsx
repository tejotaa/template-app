import { Colors } from '@/constants/theme';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

interface LanguageSelectorProps {
  isDark?: boolean;
}

export default function LanguageSelector({ isDark = false }: LanguageSelectorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { i18n, t } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (languageCode: string) => {
    try {
      await i18n.changeLanguage(languageCode);
      setIsVisible(false);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.selector, isDark && styles.selectorDark]}
        onPress={() => setIsVisible(true)}>
        <Text style={styles.flag}>{currentLanguage.flag}</Text>
        <Text style={[styles.languageText, isDark && styles.languageTextDark]}>
          {currentLanguage.code.toUpperCase()}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
          <View style={[styles.modalContent, isDark && styles.modalContentDark]}>
            <Text style={[styles.modalTitle, isDark && styles.modalTitleDark]}>
              {t('selectLanguage')}
            </Text>

            {languages.map(language => (
              <TouchableOpacity
                key={language.code}
                style={[
                  styles.languageOption,
                  currentLanguage.code === language.code && styles.selectedOption,
                  isDark && currentLanguage.code === language.code && styles.selectedOptionDark,
                ]}
                onPress={() => handleLanguageChange(language.code)}>
                <Text style={styles.optionFlag}>{language.flag}</Text>
                <Text style={[styles.optionText, isDark && styles.optionTextDark]}>
                  {language.name}
                </Text>
                {currentLanguage.code === language.code && <Text style={styles.checkMark}>✓</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.light.tint + '20',
    minWidth: 60,
  },
  selectorDark: {
    backgroundColor: Colors.dark.tint + '20',
  },
  flag: {
    fontSize: 16,
    marginRight: 4,
  },
  languageText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.light.text,
  },
  languageTextDark: {
    color: Colors.dark.text,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    padding: 20,
    minWidth: 250,
    maxWidth: '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalContentDark: {
    backgroundColor: Colors.dark.background,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalTitleDark: {
    color: Colors.dark.text,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: Colors.light.tint + '15',
  },
  selectedOptionDark: {
    backgroundColor: Colors.dark.tint + '15',
  },
  optionFlag: {
    fontSize: 20,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: Colors.light.text,
    flex: 1,
  },
  optionTextDark: {
    color: Colors.dark.text,
  },
  checkMark: {
    fontSize: 16,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
