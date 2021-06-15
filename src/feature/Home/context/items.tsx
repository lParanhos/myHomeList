import {createContext, useEffect, useState} from 'react';
import {HouseItem} from '../../../models/HouseItem';
import {getItems} from '../../../services/api';

export const ItemsContext = createContext({
  items: HouseItem[],
});

const ItemsProvider = ({ children }) => {
  const [houseItems, setHouseItem] = useState<HouseItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems();

      setHouseItem(items);
    } 
  }, []);

  return(
    <ItemsContext.Provider value ={{ items: houseItems }}>
        {children}
      </ItemsContext.Provider>
  );
};

export default ItemsProvider;
