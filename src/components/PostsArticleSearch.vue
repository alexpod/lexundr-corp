<template lang="pug">
.search
  .container.search__container
    formSelect(
      v-model="data.selectedSort"
      :options="data.sortOptions"
      label="Sort by"
    )
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useSearchStore } from "../stores/SearchStore";
import formSelect from "@/components/form/formSelect.vue";

const searchStore = useSearchStore();
const searchArticle = ref("");

const data = reactive({
  selectedSort: '',
  sortOptions: [
    {
      value: 'id',
      name: 'ID',
    },
    {
      value: 'title',
      name: 'Title',
    },
    {
      value: 'body',
      name: 'Body',
    },
  ],
})

watch(() => data.selectedSort, () => {
    if (data.selectedSort === 'id') {
      searchStore.posts.sort((post1, post2) => post1[data.selectedSort] - post2[data.selectedSort])
    } else {
      searchStore.posts.sort((post1, post2) => post1[data.selectedSort]?.localeCompare(post2[data.selectedSort]));
    }
}) 

</script>

<style lang="scss" scoped>
.search {
  background-color: #242424;
  color: #9b9b9b;
  &__container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  input {
    padding: 10px 15px;
    font-size: 18px;
    margin: 0 5px;
    border: 1px solid #96969d;
    border-radius: 6px;
    background: #1a1a1a;
    color: #9b9b9b;
  }
}
</style>