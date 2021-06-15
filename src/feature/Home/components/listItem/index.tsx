import React from 'react';
import {Feather} from '@expo/vector-icons';

import {HouseItem} from '../../../../models/HouseItem';

import {
  ListItemContainer,
  ListItemInfoWrapper,
  ListItemTitle,
  ListItemDescription,
  ListItemCheckButton,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends HouseItem {
  onDelete: (id: string) => void;
  onCompletedChange?: (id: string) => void;
}

const ListItem: React.FC<Props> = ({
  id,
  title,
  completed,
  description,
  onDelete,
  onCompletedChange,
}) => {
  return (
    <ListItemContainer>
      <ListItemInfoWrapper>
        <ListItemTitle lineTrough={completed}>{title}</ListItemTitle>
        {!!description && (
          <ListItemDescription lineTrough={completed}>
            {description}
          </ListItemDescription>
        )}
      </ListItemInfoWrapper>
      <ListItemInfoWrapper flexDirection="row">
        {onCompletedChange && (
          <ListItemCheckButton
            completed={completed}
            onPress={() => onCompletedChange(id!!)}
          />
        )}
        {onDelete && (
          <TouchableOpacity onPress={() => onDelete(id!!)}>
            <Feather name="trash" size={24} color="red" />
          </TouchableOpacity>
        )}
      </ListItemInfoWrapper>
    </ListItemContainer>
  );
};

export default ListItem;
