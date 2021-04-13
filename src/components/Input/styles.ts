import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin: 10px 0;
`;

export const InputLabel = styled.Text`
  padding-bottom: 8px;
`;

export const Input = styled(TextInput)`
  height: 40px;
  background-color: #fff;

  padding-left: 16px;

  border: 1px #e3e3e3;
  border-radius: 10px;
`;
