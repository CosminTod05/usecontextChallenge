import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
  // Usamos el hook useContext para obtener el tema y la funcion para cambiarlo
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Actualmente el tema: {theme}
    </button>
  );
};

export default Button;
