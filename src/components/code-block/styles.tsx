import styled from 'styled-components';

export interface ContainerProps {
  clipboard?: string;
}

export const Container = styled.div<ContainerProps>`
  font-family: sans-serif;
  display: table;
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
  }
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  cursor: ${(props: ContainerProps) => (props.clipboard ? 'copy' : 'inherit')};
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  overflow: scroll;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;
