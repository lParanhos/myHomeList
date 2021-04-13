import styled from 'styled-components/native';
import {IconButton} from '../../components';

export const FormContainer = styled.SafeAreaView``;

export const FormCloseButton = styled(IconButton)`
  margin-left: 32px;
`;

export const FormWrapper = styled.View`
  padding: 32px;
`;

interface ButtonProps {
  color?: 'orange' | 'default';
}

export const FormButton = styled.Button<ButtonProps>`
  ${({color}) => color === 'orange' && 'color: orange;'}
`;
