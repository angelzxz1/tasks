"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghostToggle"
            size="icon"
            onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            className="border cursor-pointer border-black/20 dark:border-white/20 hover:bg-neutral-700/20 dark:hover:bg-neutral-700"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    );
}
