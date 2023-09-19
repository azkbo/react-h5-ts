/**
 * Author: Meng
 * Date: 2023-08-31
 * Modify: 2023-08-31
 * Desc: 主题
 * 
    <AuthProvider>
      <Routes>
        <Route>
        </Route>
      </Routes>
    </AuthProvider>

    function useTheme() {
      return React.useContext(ThemeContext);
    }

    const theme = useTheme();
    theme.setTheme('');
 */
import React, { useEffect, useState, useCallback, createContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>(null!);

type ThemeProps = { children: React.ReactNode };

export default function AppTheme(props: Readonly<ThemeProps>) {
  const [theme, setTheme] = useState<string>("def");

  useEffect(() => {
    // 监听主题变化
    return () => {
      // 移除监听
    };
  }, []);

  const onSetTheme = useCallback(() => {}, []);

  const value = { theme, setTheme: onSetTheme };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
