const useTheme = (type = 'light') => {
  let colors = {
    foreground: '#0f0e17',
    background: '#fffffe',
    text: '#a7a9be',
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170',
  };
  if (type === 'dark') {
    colors = {
      background: '#0f0e17',
      foreground: '#fffffe',
      text: '#e4e4e4',
      primary: '#ff8906',
      secondary: '#f25f4c',
      tertiary: '#e53170',
    };
  }
  return colors;
};

export default useTheme;
