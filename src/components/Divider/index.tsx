import React from 'react';
import {View} from 'react-native';

interface Props {
  width: number;
  height: number;
}

const Divider: React.FC<Props> = ({...props}: Props) => {
  return <View style={{...props}} />;
};

export default Divider;
