/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    safelist: [
        'bg-gradient-to-r',
        'from-blue-600',
        'via-indigo-500',
        'to-purple-600',
        'hover:from-blue-500',
        'hover:via-indigo-400',
        'hover:to-purple-500',
        'hover:shadow-indigo-500/30'
    ],
    plugins: [],
}
