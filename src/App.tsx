import React from 'react';

import Home from './home';
import { AppContainer, GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Home />
    </AppContainer>
  );
};

export default App;
