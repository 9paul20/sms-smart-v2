import { Switch } from "@nextui-org/react";
// import { SunIcon } from "../../UI/SunIcon";
// import { MoonIcon } from "../../UI/MoonIcon";
// import { useThemeStore } from "../../../../js/consts";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

function SwitchTheme() {
  // const { theme, setTheme } = useThemeStore();
  const { resolvedTheme, setTheme: setNextTheme } = useTheme();

  // useEffect(() => {
  //   if (resolvedTheme) {
  //     setTheme(resolvedTheme);
  //   }
  // }, [resolvedTheme, setTheme]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newTheme = event.target.checked ? "dark" : "light";
  //   setTheme(newTheme);
  //   setNextTheme(newTheme);
  // };

  return (
    <Switch
      // checked={theme === "dark"}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      // onChange={handleChange}
    />
  );
}

export default SwitchTheme;
