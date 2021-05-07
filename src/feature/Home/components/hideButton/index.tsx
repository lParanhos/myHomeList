import React from 'react';
import {Feather} from '@expo/vector-icons';
import {IconButton} from '../../../../components';

interface Props {
  completed?: boolean;
  onPress: () => void;
}

const HideButton: React.FC<Props> = ({completed, onPress}: Props) => {
  const checkButtonIcon = completed ? 'check-circle' : 'circle';
  const checkButtonColor = completed ? 'green' : 'gray';

  return (
    <IconButton onPress={onPress}>
      <Feather name={checkButtonIcon} size={24} color={checkButtonColor} />
    </IconButton>
  );
};

export default HideButton;
