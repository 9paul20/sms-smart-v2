import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useSwitchThemeStore } from '../../../js/consts/SwitchThemeStore';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

function SwitchTheme() {
  const { theme, setTheme } = useSwitchThemeStore();
  const { resolvedTheme, setTheme: setNextTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme, setTheme]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    setNextTheme(newTheme);
  };

  return (
    <Switch
      checked={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={handleChange}
    />
  );
}

export default SwitchTheme;
