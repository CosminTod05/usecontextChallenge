import { createContext, useState } from 'react';

// Paso 1: Crear el Contexto
export const ThemeContext = createContext();

// Paso 2: Crear el Proveedor del Contexto (ThemeProvider)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado inicial: 'light'

  // Función para cambiar de estado
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'all')); // me confundí, es 'dark'
    // Corrección para el alumno principiante:
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
