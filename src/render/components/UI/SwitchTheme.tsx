import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useSwitchThemeStore } from '../../../js/consts/SwitchThemeStore';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

function SwitchTheme() {
  const { theme, setTheme } = useSwitchThemeStore();
  const { resolvedTheme, setTheme: setNextTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initialTheme = localStorage.getItem('theme') || 'light';
    setTheme(initialTheme);
    setNextTheme(initialTheme);
    setIsDark(initialTheme === 'dark');
  }, [setTheme, setNextTheme]);

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme);
      setIsDark(resolvedTheme === 'dark');
    }
  }, [resolvedTheme, setTheme]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    setNextTheme(newTheme);
    setIsDark(newTheme === 'dark');
  };

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={handleChange}
    />
  );
}

export default SwitchTheme;
