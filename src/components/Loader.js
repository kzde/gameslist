import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Overlay = styled.div`
  ${props => props.backgroundColor
    && `
  background-color: ${props.backgroundColor};
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  `}
`;

const BounceCircle = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: absolute;
  left: 50%;
  top: 50%;
`;

const bounce = keyframes`
  0% {transform: scale(0.0);}
  50% { transform: scale(1.0); }
  100% { transform: scale(0.0);}
`;
const Shared = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 3s infinite ease-in-out;
`;

const FirstCircle = styled(Shared)``;
const SecondCircle = styled(Shared)`
  animation-delay: -1s;
`;

const Loader = props => (
  <Overlay backgroundColor={props.backgroundColor}>
    <BounceCircle size={props.size}>
      <FirstCircle color={props.color} />
      <SecondCircle color={props.color} />
    </BounceCircle>
  </Overlay>
);

Loader.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};
Loader.defaultProps = {
  backgroundColor: undefined,
  size: '40px',
  color: 'black'
};
export default Loader;
