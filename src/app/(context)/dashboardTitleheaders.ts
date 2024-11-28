"use client";
import { createContext } from "react";
interface HeaderContext {
  title: string;
  setTitle: (title: string) => void;
  showSidebar?: boolean;
  setShowSideBar?: (value: boolean) => void;
}

export const AdminPanelHeaderContext = createContext<HeaderContext | undefined>(
  undefined
);
