import styled from 'styled-components/native';
import {IconButton} from '../../components';

export const FormContainer = styled.SafeAreaView`
  padding-top: 50px;
  height: 100%;
  background-color: #ffe;
`;

export const FormCloseButton = styled(IconButton)`
  margin-left: 32px;
`;

export const FormWrapper = styled.View`
  padding: 32px;
  height: 100%;
`;

export const ButtonsWrapper = styled.View`
  align-items: center;
`;
