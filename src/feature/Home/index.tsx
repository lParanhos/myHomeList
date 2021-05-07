import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl} from 'react-native';
import {FloatingActionButton} from '../../components/index';
import {HouseItem} from '../../models/HouseItem';
import {deleteItem, getItems, updateItem} from '../../services/api';
import {FilterBar, ListItem} from './components';

import {HomeContainer, HomeWrapper, HomeTitle} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<HouseItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);

  const handleFetchData = useCallback(async () => {
    const result = await getItems();
    setItems(result);
  }, []);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    handleFetchData().then(() => setRefreshing(false));
  }, [handleFetchData]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleFetchData();
    });

    return unsubscribe;
  }, [handleFetchData, navigation]);

  const handleCompleted = async (id: string) => {
    let currentCompleted = false;

    const updatedList = items.map(item => {
      if (item.id === id) {
        currentCompleted = !item.completed;
        item.completed = !item.completed;
      }
      return item;
    });

    setItems(updatedList);
    await updateItem({id, completed: currentCompleted});
  };

  const handleDelete = (id: string) => {
    const updatedList = items.filter(item => item.id !== id);

    Alert.alert('Confirmação', 'Tem certeza que deseja remover esse item ?', [
      {
        text: 'Sim',
        onPress: async () => {
          await deleteItem(id);
          setItems(updatedList);
        },
      },
      {text: 'Cancelar', onPress: () => {}},
    ]);
  };

  const getFilteredData = () => {
    if (showOnlyCompleted) {
      return items.filter(item => item.completed);
    }

    return items;
  };

  const handleToggleCompletedItems = () => {
    setShowOnlyCompleted(!showOnlyCompleted);
  };

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeTitle>Coisas da casa</HomeTitle>
        <FilterBar
          showOnlyCompleted={showOnlyCompleted}
          toggleOnlyCompleted={handleToggleCompletedItems}
        />
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          data={getFilteredData()}
          renderItem={({item}) => (
            <ListItem
              {...item}
              onCompletedChange={handleCompleted}
              onDelete={handleDelete}
            />
          )}
        />
      </HomeWrapper>
      <FloatingActionButton onPress={() => navigation.navigate('Form')} />
    </HomeContainer>
  );
};

export default Home;
