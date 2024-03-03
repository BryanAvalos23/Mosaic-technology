/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px'
      }
    },
  },
  plugins: [],
});

// export default {
//   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
