<script lang="ts">
import Card from "../components/Card.vue";
import { useFavoriteStore } from "../stores/Favorites";
import { useCartStore } from "../stores/Cart";

export default {
  components: { Card },
  setup() {
    const favoritesStore = useFavoriteStore();
    const cartStore = useCartStore();

    return {
      favoritesStore,
      cartStore,
    };
  },
};
</script>

<template>
  <h2>Мои закладки</h2>
  <div class="products">
    <Card
      v-for="product in favoritesStore.items"
      key="product.id"
      :title="product.title"
      :id="product.id"
      :price="product.price"
      :image="product.image"
      :is-favorite="true"
      :is-added="cartStore.isAdded(product.id)"
      :on-click-add="() => cartStore.addItem(product)"
      :on-click-favorite="() => favoritesStore.add(product)"
    />
  </div>
</template>
