import Head from 'next/head';
import AppBar from '../components/AppBar';
import useTheme from '../styles/theme';
import { useThemeContext } from '../utils/ThemeContext';

export default function Home(props) {
  const { defaultTheme } = useThemeContext();
  const theme = useTheme(defaultTheme);
  console.log(props);
  return (
    <div className={`bg-[${theme.background}] min-h-[100vw]`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <main className="px-10">
        <AppBar />
      </main>
    </div>
  );
}

Home.getInitialProps = async (props) => {
  const { req, res, query, ...others } = props;
  const themeProps = await fetch(endpoint);
  return {
    themeProps,
    ...others,
  };
};
