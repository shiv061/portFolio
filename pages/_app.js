import '../styles/globals.css';
import { ThemeContextProvider } from '../utils/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
