"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch id="dark-mode-toggle" checked={isDarkMode} onCheckedChange={handleToggle} />
      {isDarkMode ? (
        <Label className="flex items-center gap-2" htmlFor="dark-mode-toggle">
          Light Mode <SunIcon />{" "}
        </Label>
      ) : (
        <Label className="flex items-center gap-2" htmlFor="dark-mode-toggle">Dark Mode <MoonIcon/></Label>
      )}
    </div>
  );
}
