import useTheme from '../styles/theme';
import { useThemeContext } from '../utils/ThemeContext';

const AppBar = () => {
  const { defaultTheme, setTheme } = useThemeContext();
  const theme = useTheme(defaultTheme);
  return (
    <div className="w-full h-[4rem] flex items-center justify-between">
      <div>
        <p className={`text-[${theme.text}]`}>Shivansh Singh</p>
      </div>
      <div className="w-8 h-8 hover:opacity-10 cursor-pointer" onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill={defaultTheme === 'dark' ? 'white' : 'none'} viewBox="0 0 24 24" stroke={defaultTheme === 'dark' ? 'white' : 'currentColor'}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
    </div>
  );
};

export default AppBar;
