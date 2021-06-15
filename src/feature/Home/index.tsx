import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {FloatingActionButton} from '../../components/index';
import {deleteItem, updateItem} from '../../services/api';
import {FilterBar, ItemsList} from './components';

import {HomeContainer, HomeWrapper, HomeTitle} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleCompleted = async (id: string) => {
    let currentCompleted = false;

    /* const updatedList = items.map(item => {
      if (item.id === id) {
        currentCompleted = !item.completed;
        item.completed = !item.completed;
      }
      return item;
    });
 */
    // setItems(updatedList);
    await updateItem({id, completed: currentCompleted});
  };

  const handleDelete = (id: string) => {
    // const updatedList = items.filter(item => item.id !== id);

    Alert.alert('Confirmação', 'Tem certeza que deseja remover esse item ?', [
      {
        text: 'Sim',
        onPress: async () => {
          await deleteItem(id);
          // setItems(updatedList);
        },
      },
      {text: 'Cancelar', onPress: () => {}},
    ]);
  };

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
