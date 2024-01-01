<template lang="pug">
.article
  .article__container
    .article__id
      span.article__id-symbol &#x23;
      span {{ article.id }}
    .article__content
      .article__title {{ article.title }}
      .article__text {{ article.body }}
    //.article__actions
      .button Read more
</template>

<script setup>
import { useSearchStore } from "../stores/SearchStore";

const searchStore = useSearchStore();

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>


<style lang="scss" scoped>
.article {
  background-color: #242424;
  border-color: #ccc;
  color: rgba(235, 235, 235, 0.6);
  margin: 4px 0;
  padding: 15px;
  border-radius: 6px;
  &__container {
    display: flex;
    align-items: start;
  }
  &__id {
    opacity: 0.5;
    line-height: 22px;
    padding-right: 10px;
  }
  &__title {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 5px;
    color: $color-green;
  }
  &__actions {
    padding-top: 10px;
    display: flex;
    gap: 5px
  }
  &__button {
    background-color: #6775f0;
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 6px;
  }
}

</style>