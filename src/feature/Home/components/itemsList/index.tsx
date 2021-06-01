import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {inject, observer} from 'mobx-react';

import {ListItem} from '..';

import Store from '../../../../store';
import {deleteItem, updateItem} from '../../../../services/api';
import {HouseItem} from '../../../../models/HouseItem';

interface ItemsListProps {
  store?: typeof Store;
}

const ItemsList: React.FC<ItemsListProps> = ({store}: ItemsListProps) => {
  const handleToggleComplete = async (item: HouseItem) => {
    await updateItem({id: item.id!, completed: !item.completed});
    store?.toggleItemCompleted(item.id!);
  };

  const handleDelete = async (itemID: string) => {
    await deleteItem(itemID);
    store?.removeItem(itemID);
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={store?.isLoading!!}
          onRefresh={store?.loadData}
        />
      }
      data={store?.filteredData}
      renderItem={({item}) => (
        <ListItem
          {...item}
          onCompletedChange={() => handleToggleComplete(item)}
          onDelete={() => handleDelete(item.id!)}
        />
      )}
    />
  );
};

export default inject('store')(observer(ItemsList));
