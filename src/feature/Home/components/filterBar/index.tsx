import React from 'react';

import HideButton from '../hideButton';

import {Container, SearchInput, Divider} from './styles';

interface Props {
  toggleOnlyCompleted: () => void;
  showOnlyCompleted: boolean;
}

const FilterBar: React.FC<Props> = ({
  toggleOnlyCompleted,
  showOnlyCompleted,
}: Props) => {
  return (
    <Container>
      <SearchInput placeholder="Ex: Facas..." showSearchIcon />
      <Divider />
      <HideButton onPress={toggleOnlyCompleted} completed={showOnlyCompleted} />
    </Container>
  );
};

export default FilterBar;
