import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Modern Green Theme
          primary: { value: '#065F46' },
          primaryLight: { value: '#10B981' },
          secondary: { value: '#6B7280' },
          textPrimary: { value: '#1F2937' },
          textSecondary: { value: '#374151' },
          bgWhite: { value: '#FFFFFF' },
          bgGray: { value: '#F9FAFB' },
          border: { value: '#E5E7EB' },
          borderLight: { value: '#F3F4F6' },
          borderDark: { value: '#D1D5DB' },
          
          // Status colors
          'status-available': { value: '#047857' },
          'status-reserved': { value: '#D97706' },
          'status-sold': { value: '#6B7280' },
        },
        spacing: {
          1: { value: '4px' },
          2: { value: '8px' },
          3: { value: '12px' },
          4: { value: '16px' },
          6: { value: '24px' },
          8: { value: '32px' },
          12: { value: '48px' },
        },
        fontSizes: {
          xs: { value: '12px' },
          sm: { value: '14px' },
          base: { value: '16px' },
          lg: { value: '18px' },
          xl: { value: '20px' },
          '2xl': { value: '24px' },
          '3xl': { value: '30px' },
          '4xl': { value: '36px' },
        },
        fontWeights: {
          normal: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
        },
        radii: {
          sm: { value: '4px' },
          base: { value: '6px' },
          md: { value: '8px' },
          lg: { value: '12px' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
