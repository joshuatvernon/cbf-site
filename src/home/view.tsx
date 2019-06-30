import React from 'react';
import GitHubButton from 'react-github-btn';
import GithubCorner from 'react-github-corner';

import CodeBlock from '../components/code-block';
import demo from './images/demo.gif';
import sloth from './images/sloth.png';
import {
  Copyright,
  Description,
  GitHubButtonContainer,
  Heading1,
  Heading2,
  Image
} from './styles';

export interface State {
  npmInstallCode: string;
  yarnInstallCode: string;
}

class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      npmInstallCode: 'npm install cbf -g',
      yarnInstallCode: 'yarn global add cbf'
    };
  }

  public getInstallWithNPMCode = () => {
    return `$ npm install cbf -g`;
  };

  public getInstallWithYarnCode = () => {
    return `$ yarn global add cbf`;
  };

  public getExampleScriptCode = () => {
    return `---
example-project:
message: "Run, build or test example project?"
directory: "~/projects/example"
options:
    run:
        message: "Running example project..."
        command: "yarn start"
    build:
        directory: "~/projects/example/src"
        message: "Building example project..."
        command: "yarn install"
    test:
        message: "Run unit or integration tests?"
        options:
            unit:
                message: "Running example project unit tests"
                command: "yarn test:unit"
            integration:
                message: "Running example project integration tests"
                command: "yarn test:integration"`;
  };

  public render() {
    const { npmInstallCode, yarnInstallCode } = this.state;
    return (
      <div className="App">
        <header>
          <Heading1>CBF</Heading1>
          <GitHubButtonContainer>
            <GitHubButton
              className="github-button"
              href="https://github.com/joshuatvernon/cbf"
              data-icon="octicon-star"
              data-size="large"
              aria-label="Star joshuatvernon/cbf on GitHub"
            >
              Star
            </GitHubButton>
            <GitHubButton
              href="https://github.com/joshuatvernon/cbf/subscription"
              data-icon="octicon-eye"
              data-size="large"
              aria-label="Watch joshuatvernon/cbf on GitHub"
            >
              Watch
            </GitHubButton>
          </GitHubButtonContainer>
          <Image src={sloth} className="logo" alt="cbf logo" />
        </header>
        <Description>
          CBF is a simple CLI tool for developers who <i>can't be f#@!'d</i>{' '}
          learning or remembering all the commands they have to run day to day
          or just in a specific repo.
        </Description>
        <Heading2>Install</Heading2>
        <CodeBlock
          code={this.getInstallWithNPMCode()}
          language={'bash'}
          clipboard={npmInstallCode}
        />
        <Description>OR</Description>
        <CodeBlock
          code={this.getInstallWithYarnCode()}
          language={'bash'}
          clipboard={yarnInstallCode}
        />
        <Heading2>Demo</Heading2>
        <Image src={demo} className="demo" alt="cli demo" />
        <Heading2>Example</Heading2>
        <CodeBlock code={this.getExampleScriptCode()} language={'yaml'} />
        <Copyright>Copyright © Joshua Vernon 2019</Copyright>
        <GithubCorner
          href="https://github.com/joshuatvernon/cbf"
          size="140"
          bannerColor="crimson"
        />
      </div>
    );
  }
}

export default Home;
