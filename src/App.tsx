import React from 'react';

import Home from './home';
import leaves from './images/leaves.png';
import { AppContainer, GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <AppContainer src={leaves}>
      <GlobalStyle />
      <Home />
    </AppContainer>
  );
};

export default App;
