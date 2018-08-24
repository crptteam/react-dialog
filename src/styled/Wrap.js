import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  background: #fff;
`;