import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

type Language = 'en' | 'ar';

interface LanguageState {
  currentLanguage: Language;
  translations: typeof en;
  isRTL: boolean;
}

const translations = { en, ar };

const initialState: LanguageState = {
  currentLanguage: 'en',
  translations: en,
  isRTL: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
      state.translations = translations[action.payload];
      state.isRTL = action.payload === 'ar';
    },
    toggleLanguage: (state) => {
      const newLang = state.currentLanguage === 'en' ? 'ar' : 'en';
      state.currentLanguage = newLang;
      state.translations = translations[newLang];
      state.isRTL = newLang === 'ar';
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
