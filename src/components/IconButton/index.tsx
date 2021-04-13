import React, {ReactNode} from 'react';

import {IconButtonContainer} from './styles';

interface IconButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: any;
}

function IconButton({children, style, onPress}: IconButtonProps) {
  return (
    <IconButtonContainer onPress={onPress} style={style}>
      {children}
    </IconButtonContainer>
  );
}

export default IconButton;
