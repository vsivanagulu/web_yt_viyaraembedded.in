/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}" // Explicitly added components based on project structure
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
