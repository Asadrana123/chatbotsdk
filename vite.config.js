import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/components/chatBot.jsx', // The entry point of your feature
      name: 'ChatBotSDK',        // Name of your SDK (will be used in the global scope)
      fileName: (format) => `chatbot-sdk.${format}.js`, // The output file name
    },
    rollupOptions: {
      // Make sure to externalize react and react-dom to prevent bundling them
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM', // Define global variable names for react and react-dom
        },
      },
    },
  },
})
