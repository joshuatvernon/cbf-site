import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import-normalize;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {  
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export interface AppProps {
  src: string;
}

export const AppContainer = styled.div`
  text-align: center;
  background-image: url('${(props: AppProps) => props.src}');
`;
