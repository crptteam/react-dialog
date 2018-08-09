import styled from "styled-components";

export const Button = styled.div`
  display: inline-block;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.13), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  color: #52535a;
  padding: 8px 22px;
  margin-right: 24px;
  cursor: ${props => (props.onClick ? "pointer" : "normal")};
  :last-child {
    margin-right: 0px;
  }
`;
