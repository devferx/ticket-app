import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface UiContextProps {
  isMenuHide: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export const UiContext = createContext({} as UiContextProps);

interface UiProviderProps {
  children: ReactNode;
}

export const UiProvider = ({ children }: UiProviderProps) => {
  const [isMenuHide, setIsMenuHide] = useState(false);

  const showMenu = () => {
    setIsMenuHide(false);
  };

  const hideMenu = () => {
    setIsMenuHide(true);
  };

  return (
    <UiContext.Provider value={{ isMenuHide, showMenu, hideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
