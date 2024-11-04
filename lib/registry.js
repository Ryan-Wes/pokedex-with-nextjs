import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  /* Adicione estilos globais se necessário */
`;

const StyledComponentsRegistry = ({ children }) => {
  useEffect(() => {
    // Lógica de inicialização, se necessário
  }, []);

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default StyledComponentsRegistry;
