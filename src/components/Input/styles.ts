import {TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin: 10px 0;
`;

export const InputLabel = styled.Text`
  padding-bottom: 8px;
`;

export const InputWrapper = styled.View`
  height: 40px;
  background-color: #fff;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 16px;

  border: 1px #e3e3e3;
  border-radius: 10px;
`;

export const SearchIcon = styled(Feather).attrs({
  name: 'search',
  color: '#787878',
  size: 16,
})`
  margin-right: 5px;
`;

export const Input = styled(TextInput)``;
