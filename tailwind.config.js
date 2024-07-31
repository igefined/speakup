/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'gilroy': ['Gilroy-Regular', 'sans-serif'],
                'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
                'gilroy-semi-bold': ['Gilroy-SemiBold', 'sans-serif'],
                'gilroy-semi-bold-italic': ['Gilroy-SemiBoldItalic', 'sans-serif'],
                'gilroy-medium-italic': ['Gilroy-MediumItalic', 'sans-serif'],
            },
            colors: {
                'primary-blue': '#0F35D6',
                'primary-blue-strong': '#1531AC',
                'primary-blue-weak': '#D3DBFF',
                'primary-blue-secondary': '#EFF2FF',
                'primary-blue-light': '#dbe0fb',
                'dark-grey': '#242424',
                'light-grey': '#FFFFFFCC',
            },
            borderRadius: {
                'none': '0',
                DEFAULT: '10px',
            },
            borderWidth: {
                'none': '0px',
                DEFAULT: '1px'
            },
            boxShadow: {
                '2xl': '0px 5px 10px 4px rgba(0.1, 0.1, 0.1, 0.05)'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
