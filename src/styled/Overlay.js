import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 999999;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(82, 83, 90, 0.5);
  display: ${props => props.show ? 'block' : 'none'};
`;
