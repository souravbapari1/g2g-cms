import type { StrapiApp } from '@strapi/strapi/admin';
import "./global.css";


export default {
  config: {
    tutorials: false,

    head: {
      favicon: "",
      title:"Gray To Green"
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Dashboard',
        "Auth.form.welcome.title": "HI, Welcome Back",
        "Auth.form.welcome.subtitle": "Log in to your Gray To Green CMS",
      },
      'pt-BR': {
        'app.components.LeftMenu.navbrand.title': 'Gray To Green'
      }
    },
    theme: {
      colors: {
        primary100: '#E6F4EA',      // Very light green for highlights
        primary200: '#C2E5D3',      // Lighter green for secondary elements
        primary500: '#4CAF50',      // Main green theme color
        primary600: '#388E3C',      // Darker green for hover states
        primary700: '#2E7D32',      // Darkest green for accents

        // Button colors
        buttonPrimary500: '#4CAF50', // Button primary color
        buttonPrimary600: '#388E3C', // Button hover color

        // Neutral colors for background and text
        neutral0: '#FFFFFF',         // White body background
        neutral100: '#FFFFFF',       // Light green for sidebar or panels
        neutral150: '#E0F2E9',       // Light border color
        neutral200: '#B2DFBF',       // Accent color
        neutral500: '#4CAF50',       // Text in primary theme color
        neutral700: '#2E7D32',       // Darker green text for contrast

        // Success, warning, and information colors
        success100: '#E6F4EA',       // Light green for success background
        success500: '#4CAF50',       // Standard success green
        warning100: '#FFF3CD',       // Light yellow for warnings
        warning500: '#FF9800',       // Orange for warnings
        info100: '#E0F7FA',          // Light blue for info background
        info500: '#29B6F6'           // Blue for info elements
      },
    },
  
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    document.title = "Gray To Green";
  
    console.log(app);
  },
}
