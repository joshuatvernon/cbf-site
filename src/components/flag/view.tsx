import React from 'react';

import {
  Description,
  FlagWrapper,
  Icon,
  Title,
  TitleContainer
} from './styles';
import tick from './tick.svg';

export enum FlagTypes {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error'
}

export interface Props {
  type: FlagTypes;
  title: string;
  description: string | React.ElementType;
}

class Flag extends React.Component<Props> {
  public render() {
    const { title, description, type } = this.props;
    return (
      <FlagWrapper type={type}>
        <TitleContainer>
          <Icon src={tick} />
          <Title>{title}</Title>
        </TitleContainer>
        <Description>{description}</Description>
      </FlagWrapper>
    );
  }
}

export default Flag;
