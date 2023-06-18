import styled from 'styled-components/native';
import {colors} from '../common/universal/Color';

export const OneToOneView = styled.View`
  padding-top: 32px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;
export const OneToOneImage = styled.Image`
  width: 318px;
  height: 175px;
  position: absolute;
  bottom: 0;
  right: -20px;
`;

export const OneToOneHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
