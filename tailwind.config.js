module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-main-pink': '#B70569',
        'primary-dark-pink': '#6D033F',
        'primary-light-pink': '#F0CDE1',
        'secondary-main-black': '#1A1A1A',
        'primary-lighter-pink': '#F0CDE14D',
        'primary-very-light-pink': '#F7E6F04D',
        'primary-gray': '#707070',
        gainsboro: '#E5E5E5',
        'white-smoke': '#F0F0F0',
        mortar: '#555',
        'dark-blue': '#2A254B',
        'community-pink-bg': '#FDC0E3',
        'primary-dark-brown': '#260808',
        'secondary-dark-brown': '#210D15',
        'grey-text': '#808080',
        'neutral-250': '#202020',
        hireTalent: '#FDC0E33D',
        'event-bg': '#210D15',
      },
      fontSize: {
        15: '15px',
      },
      backgroundImage: {
        'hero-bg-gradient':
          'radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%) ',
        'event-hero-bg':
          'radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%)',
      },

      screens: {
        '2md': '992px',
      },
    },
  },
  plugins: [],
};
