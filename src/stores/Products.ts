import { defineStore } from "pinia";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  isAdded?: boolean;
  isFavorite?: boolean;
}

interface State {
  items: IProduct[];
  isLoading: boolean;
}

export const useProductsStore = defineStore("products", {
  state: (): State => ({ items: [], isLoading: true }),
  actions: {
    async fetchItems() {
      this.isLoading = true;

      const res = await fetch("https://fakestoreapi.com/products?limit=20");

      if (res.ok) {
        this.items = await res.json();
      }

      this.isLoading = false;
    },
  },
});
