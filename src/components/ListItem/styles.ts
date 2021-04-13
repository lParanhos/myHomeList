import styled from 'styled-components/native';

export const ListItemContainer = styled.View`
  border-radius: 10px;
  border: 1px #e3e3e3 solid;

  padding: 10px;
  margin: 10px 0px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 60px;

  background-color: #fff;
`;

interface ListItemWrapperProps {
  flexDirection?: 'row' | 'column';
}

export const ListItemInfoWrapper = styled.View<ListItemWrapperProps>`
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
`;

interface TextProps {
  lineTrough?: boolean;
}

export const ListItemTitle = styled.Text<TextProps>`
  font-size: 16px;
  font-weight: bold;

  ${({lineTrough}) => lineTrough && 'text-decoration: line-through;'}
`;

export const ListItemDescription = styled.Text<TextProps>`
  color: #808080;
  font-size: 14px;

  ${({lineTrough}) => lineTrough && 'text-decoration: line-through;'}
`;

export const ListItemCheckButton = styled.TouchableOpacity`
  padding-right: 5px;
`;
