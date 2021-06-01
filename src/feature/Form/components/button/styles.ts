import styled from 'styled-components/native';

interface ButtonProps {
  color?: 'orange' | 'default';
}

export const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
  height: 40px;
  width: 30%;
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
  background-color: ${({color}) => (color ? color : '#306afc')};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
`;
