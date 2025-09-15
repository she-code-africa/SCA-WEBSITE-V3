// import j from "./src/assets/v2/images/bgImg.png"
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main-pink": "#B70569",
        "primary-dark-pink": "#6D033F",
        "primary-light-pink": "#F0CDE1",
        "secondary-main-black": "#1A1A1A",
        "primary-lighter-pink": "#F0CDE14D",
        "primary-very-light-pink": "#F7E6F04D",
        "primary-gray": "#707070",
        gainsboro: "#E5E5E5",
        "white-smoke": "#F0F0F0",
        mortar: "#555",
        "dark-blue": "#2A254B",
        "community-pink-bg": "#FDC0E3",
        "primary-dark-brown": "#260808",
        "seal-brown": "#210D15",
        "grey-text": "#808080",
        "neutral-250": "#202020",
        "cotton-candy": "#FDC0E33D",
        tutu: "#F9E8F1",
        charcoal: "#434343",
        "floral-white": "#FFF8EA",
        gamboge: "#EEA30A",
        veryLightGrey: "#CFCFCF",
        "lavendar-blush": "#FFF7FC",
        gains: "#D8D8D8",
        "Secondary-Grape": "#7D355D",
        "Primary-Magenta": "#B70569",
        "Secondary-Velvet": "#5C0335",
        "SCA-Cloud": "#F4EFEC",
        "SCA-Garden": "#BEE366",
        "SCA-Zesty": "#DDFF8F",
      },
      fontSize: {
        15: "15px",
      },
      backgroundImage: {
        "hero-bg-gradient":
          "radial-gradient(126.96% 275.84% at 90.24% 16.36%, #B70569 0%, rgba(183, 5, 105, 0.12) 0.01%, rgba(183, 5, 105, 0.08) 19.27%, rgba(183, 5, 105, 0.165605) 30.73%, rgba(183, 5, 105, 0) 81.77%, rgba(183, 5, 105, 0) 100%) ",
        bgI: "url('./assets/v2/images/bgImg2.png')",
        magentaPattern: "url('./assets/v2/images/magenta-pattern.png')",
        olivePattern: "url('./assets/v2/images/olive-pattern.jpg')",
        blushPattern: "url('./assets/v2/images/pink-blush-pattern.png')",
        bgPinkPattern: "url('./assets/v2/images/bg-blush.png')",
      },

      screens: {
        "2md": "992px",
        "2xl": "1950px",
      },
      fontFamily: {
        BebasNeue: ["Bebas Neue", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
