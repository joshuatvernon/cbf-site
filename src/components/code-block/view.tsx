import Highlight, {
  defaultProps as prismDefaultProps,
  Language
} from 'prism-react-renderer';
// tslint:disable-next-line:no-submodule-imports
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';

import Flag from '../flag';
import { FlagTypes } from '../flag/view';
import { Container, LineNo, Pre } from './styles';

export interface Props {
  language: Language;
  code: string;
  clipboard?: string;
}

export interface State {
  isFlagHidden: boolean;
}

class CodeBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isFlagHidden: true
    };
  }

  public copyToClipboard = (text: string) => {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  };

  public onClick = () => {
    const { clipboard } = this.props;
    if (clipboard) {
      this.copyToClipboard(clipboard);
      this.setState({ isFlagHidden: false });
      setTimeout(() => {
        this.setState({ isFlagHidden: true });
      }, 3000);
    }
  };

  public renderFlag = () => {
    const { clipboard } = this.props;
    const title = 'Copied to clipboard';
    const description = `Copied "${clipboard}" to the clipboard`;
    return (
      <Flag type={FlagTypes.INFO} title={title} description={description} />
    );
  };

  public render() {
    const { language, code, clipboard } = this.props;
    const { isFlagHidden } = this.state;
    return (
      <Container clipboard={clipboard} onClick={this.onClick}>
        <Highlight
          {...prismDefaultProps}
          theme={nightOwlTheme}
          language={language}
          code={code}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, j) => (
                    <span key={j} {...getTokenProps({ token, key: j })} />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
        {isFlagHidden ? null : this.renderFlag()}
      </Container>
    );
  }
}

export default CodeBlock;
