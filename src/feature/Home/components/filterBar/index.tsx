import {inject, observer} from 'mobx-react';
import React from 'react';

import HideButton from '../hideButton';

import Store from '../../../../store';

import {Container, SearchInput} from './styles';
import {Divider} from '../../../../components';

interface Props {
  store?: typeof Store;
}

const FilterBar: React.FC<Props> = ({store}: Props) => {
  return (
    <Container>
      <SearchInput
        placeholder="Ex: Facas..."
        showSearchIcon
        onChangeText={store?.updateText}
      />
      <Divider width={10} height={0} />
      <HideButton
        onPress={store?.toggleOnlyCompleted!}
        completed={store?.showOnlyCompletedItems}
      />
    </Container>
  );
};

export default inject('store')(observer(FilterBar));
