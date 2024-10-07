/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "2.75rem",
          xl: "3rem", // Added xl padding for consistency
          "2xl": "3rem",
        },
      },
      screens: {
        // xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        "h1-2xl": "3rem",     // 48px
        "h1-xl": "2.75rem",   // 44px
        "h1-lg": "2.5rem",    // 40px
        "h1-md": "2.25rem",   // 36px
        "h1-sm": "2rem",      // 32px
        "h1-xs": "1.75rem",   // 28px
      
        "h2-2xl": "2.75rem",  // 44px
        "h2-xl": "2.5rem",    // 40px
        "h2-lg": "2.25rem",   // 36px
        "h2-md": "2rem",      // 32px
        "h2-sm": "1.75rem",   // 28px
        "h2-xs": "1.5rem",    // 24px
      
        "h3-2xl": "2.5rem",   // 40px
        "h3-xl": "2.25rem",   // 36px
        "h3-lg": "2rem",      // 32px
        "h3-md": "1.75rem",   // 28px
        "h3-sm": "1.5rem",    // 24px
        "h3-xs": "1.375rem",  // 22px
      
        "h4-2xl": "2.25rem",  // 36px
        "h4-xl": "2rem",      // 32px
        "h4-lg": "1.75rem",   // 28px
        "h4-md": "1.5rem",    // 24px
        "h4-sm": "1.375rem",  // 22px
        "h4-xs": "1.25rem",   // 20px
      
        "h5-2xl": "1.75rem",  // 28px
        "h5-xl": "1.625rem",  // 26px
        "h5-lg": "1.5rem",    // 24px
        "h5-md": "1.375rem",  // 22px
        "h5-sm": "1.25rem",   // 20px
        "h5-xs": "1.125rem",  // 18px
      
        "h6-2xl": "1.375rem", // 22px
        "h6-xl": "1.25rem",   // 20px
        "h6-lg": "1.125rem",  // 18px
        "h6-md": "1rem",      // 16px
        "h6-sm": "0.875rem",  // 14px
        "h6-xs": "0.75rem",   // 12px
      
        p: "0.9375rem",       // 15px for paragraph text
      
        xs: "0.75rem",        // 12px
        sm: "0.875rem",       // 14px
        base: "1rem",         // 16px
        lg: "1.125rem",       // 18px
        xl: "1.25rem",        // 20px
        "2xl": "1.5rem",      // 24px
        "3xl": "1.75rem",     // 28px
        "4xl": "2.25rem",     // 36px
        "5xl": "2.75rem",     // 44px
        "6xl": "3.5rem",      // 56px
        "7xl": "4rem",        // 64px
      },      
      lineHeight: {
        "custom-36": "2.25rem",
        "custom-32": "2rem",
        
      },
      maxHeight: {
        0: "0",
        "1/10": "10%",
        "1/6": "16.6667%", // Corrected from 40% to 1/6
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
        full: "100%",
      },
      minHeight: {
        200: "200px",
        260: "260px",
        50: "50%",
      },
      fontFamily: {
        mont: ["montserrat", "sans-serif"],
        pops: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],

      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      borderColor: {
        "custom-blue": "rgba(31, 78, 121, 0.2)",
      },

      spacing: {
        0: "0",
        px: "1px",
        0.5: "0.125rem", // 2px (Tailwind default)
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        7: "1.75rem", // 28px
        8: "2rem", // 32px
        9: "2.25rem", // 36px
        10: "2.5rem", // 40px
        11: "2.75rem", // 44px
        12: "3rem", // 48px
        14: "3.5rem", // 56px
        16: "4rem", // 64px
        20: "5rem", // 80px
        24: "6rem", // 96px
        28: "7rem", // 112px
        32: "8rem", // 128px
        36: "9rem", // 144px
        40: "10rem", // 160px
        44: "11rem", // 176px
        48: "12rem", // 192px
        52: "13rem", // 208px
        56: "14rem", // 224px
        60: "15rem", // 240px
        64: "16rem", // 256px
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
        auto: "auto",
        full: "100%",
        screen: "100vw",
        "-px": "-1px",
        "-0.5": "-0.125rem", // -2px (Tailwind default)
        "-1": "-0.25rem",
        "-2": "-0.5rem",
        "-3": "-0.75rem",
        "-4": "-1rem",
        "-5": "-1.25rem",
        "-6": "-1.5rem",
        "-7": "-1.75rem",
        "-8": "-2rem",
        "-9": "-2.25rem",
        "-10": "-2.5rem",
        "-11": "-2.75rem",
        "-12": "-3rem",
        "-14": "-3.5rem",
        "-16": "-4rem",
        "-20": "-5rem",
        "-24": "-6rem",
        "-28": "-7rem",
        "-32": "-8rem",
        "-36": "-9rem",
        "-40": "-10rem",
        "-44": "-11rem",
        "-48": "-12rem",
        "-52": "-13rem",
        "-56": "-14rem",
        "-60": "-15rem",
        "-64": "-16rem",
        "-72": "-18rem",
        "-80": "-20rem",
        "-96": "-24rem",
        "1/5": "20%",
        15: "15%",
        "1/11": "5%",
        "1/6": "16.6667%",
        "1/10": "10%",
      },
      height: {
        50: "200px",
        60: "60vh",
        80: "80px",
      },
      borderWidth: {
        12: "12px",
      },
      letterSpacing: {
        "custom-wide": "2px",
      },
      colors: {
        bluePrimary: "#1f4e79",
        blueMedium: "#2a5f8f",
        blueBorder: "#002B52",
        lightBlue:'rgba(238, 242, 245, 1)',
        blueDark: "#1D507A",
        blueDarker: "#053D5D",
        greenLight: "#62B246",
        greenMedium: "#5A8A40",
        greenDark: "#336732",
        greenDarker: "#1F4922",
        beigeLight: "#D3B79B",
        brownMedium: "#AC733E",
        greyLight: "#BCC8D3",
        purpleMedium: "#9353A1",
        greyPrimary: "#919191",
      },
      translate: {
        "-1/2": "-50%",
      },
      keyframes: {
        fillLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        fillLine: "fillLine 5s linear forwards",
      },
    },
  },
  plugins: [],
};
