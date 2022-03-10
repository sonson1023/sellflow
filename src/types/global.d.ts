declare global {
  export { t } from '../helpers/translate';
  export const global: typeof globalThis;
}

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      bold: ThemeFont;
      italic: ThemeFont;
    }
    interface ThemeColors {
      border: string;
    }
  }
}

export {};
