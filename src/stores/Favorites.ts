import { defineStore } from "pinia";
import { IProduct } from "./Products";

interface State {
  items: IProduct[];
}

export const useFavoriteStore = defineStore("favorite", {
  state: (): State => ({ items: [] }),
  getters: {
    isFavorite: (state) => {
      return (id: number) => {
        return state.items.some((o) => o.id === id);
      };
    },
  },
  actions: {
    setItems(items: IProduct[]) {
      this.items = items;
    },
    add(item: IProduct) {
      const find = this.items.find((o) => o.id === item.id);

      if (find) {
        this.items = this.items.filter((o) => o.id !== item.id);
      } else {
        this.items.push(item);
      }
    },
  },
});
