"use client";

import React, { useEffect, useState } from "react";
import { useModeAnimation } from "react-theme-switch-animation";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const ThemeToggleBtn = () => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <Button variant="ghost" ref={ref} onClick={toggleSwitchTheme}>
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggleBtn;
