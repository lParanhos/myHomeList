import styled from 'styled-components/native';
import {Input} from '../../../../components';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchInput = styled(Input)`
  width: 120px;
`;
