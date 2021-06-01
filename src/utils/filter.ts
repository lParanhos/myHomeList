import {HouseItem} from '../models/HouseItem';

interface FilterByProps {
  text: string;
  showOnlyCompletedItems: boolean;
}

const preventEscapeString = (text: string) => text.replace(/\\/g, '\\\\');

const filterBy = (
  data: HouseItem[],
  {text, showOnlyCompletedItems}: FilterByProps,
) => {
  let _data = data;
  if (text) {
    const regex = new RegExp(preventEscapeString(text), 'i');
    _data = _data.filter((item: HouseItem) => item.title.search(regex) >= 0);
  }

  if (showOnlyCompletedItems) {
    _data = _data.filter(item => item.completed);
  }

  return _data;
};

export {filterBy};
