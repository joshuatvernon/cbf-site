import styled from 'styled-components';
import { FlagTypes } from './view';

export interface FlagProps {
  type: FlagTypes;
}

export const FlagWrapper = styled.div`
  @-webkit-keyframes fadeinout {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeinout {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  position: fixed;
  bottom: 30px;
  left: 30px;
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    text-align: center;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: unset;
    z-index: 1001;
  }
  padding: 0 10px;
  border-radius: 6px;
  border: 2px solid
    ${(props: FlagProps) => {
      const { type } = props;
      switch (type) {
        case FlagTypes.INFO:
          return 'rgba(128, 190, 102, 0.7)';
        case FlagTypes.WARNING:
          return 'yellow';
        case FlagTypes.ERROR:
          return 'crimson';
        default:
          return 'rgba(128, 190, 102, 0.7)';
      }
    }};
  background: ${(props: FlagProps) => {
    const { type } = props;
    switch (type) {
      case FlagTypes.INFO:
        return 'rgb(191, 253, 151)';
      case FlagTypes.WARNING:
        return 'yellow';
      case FlagTypes.ERROR:
        return 'crimson';
      default:
        return 'rgb(191, 253, 151)';
    }
  }};
  text-align: left;
  opacity: 0;
  -webkit-animation: fadeinout 3s linear forwards;
  animation: fadeinout 3s linear forwards;
`;

export const TitleContainer = styled.div``;

export interface IconProps {
  src: string;
}

export const Icon = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background-size: contain;
  background-image: url('${(props: IconProps) => props.src}');
`;

export const Title = styled.h2`
  display: inline-block;
  margin-bottom: 0;
`;

export const Description = styled.p``;
