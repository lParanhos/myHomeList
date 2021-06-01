import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FloatingActionButton} from '../../components/index';
import {FilterBar, ItemsList} from './components';

import {HomeContainer, HomeWrapper, HomeTitle} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeTitle>Coisas da casa</HomeTitle>
        <FilterBar />
        <ItemsList />
      </HomeWrapper>
      <FloatingActionButton onPress={() => navigation.navigate('Form')} />
    </HomeContainer>
  );
};

export default Home;
