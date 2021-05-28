import {action, computed, makeObservable, observable, runInAction} from 'mobx';
import {HouseItem} from '../models/HouseItem';
import {getItems} from '../services/api';
import {filterBy} from '../utils/filter';

class Store {
  @observable text = '';

  @observable isLoading = true;

  @observable showOnlyCompletedItems = false;

  @action
  updateText = (text: string) => {
    this.text = text;
  };

  constructor() {
    makeObservable(this);

    runInAction(this.loadData);
  }

  @observable
  data: HouseItem[] = [];

  @computed
  get filteredData(): HouseItem[] {
    return filterBy(this.data, {
      text: this.text,
      showOnlyCompletedItems: this.showOnlyCompletedItems,
    });
  }

  @action
  updateData = (data: HouseItem[]) => {
    this.data = data;
  };

  @action
  addNewItem = (newItem: HouseItem) => {
    this.data = [...this.data, {...newItem}];
  };

  @action
  removeItem = (itemID: string) => {
    this.data = this.data.filter(item => item.id !== itemID);
  };

  @action
  toggleItemCompleted = (itemID: string) => {
    this.data = this.data.map(item => {
      if (item.id === itemID) {
        return {...item, completed: !item.completed};
      }
      return item;
    });
  };

  @action
  setIsLoading = (value: boolean) => (this.isLoading = value);

  @action
  toggleOnlyCompleted = () => {
    this.showOnlyCompletedItems = !this.showOnlyCompletedItems;
  };

  @action
  loadData = async () => {
    this.setIsLoading(true);
    const result = await getItems();
    this.updateData(result);
    this.setIsLoading(false);
  };
}

export default new Store();
