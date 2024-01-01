<template lang="pug">
.pagination
  .pagination__item(
    v-for="pageNumber in props.pages"
    :key="pageNumber"
    :class="{'pagination__item_active' : props.page === pageNumber}, props.page"
    @click="changePage(pageNumber)"
  ) {{ pageNumber }}

</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  pages: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 0,
  }
})

const emits = defineEmits(['update:modelValue'])

const changePage = (page) => {
  console.log('number', page)
  emits('update:modelValue', page)
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
  padding: 30px 0 50px;
  &__item {
    color: #ebebeb99;
    padding: 10px 15px;  
    background-color: #242424;
    border-bottom: 1px solid #5454547a;
    cursor: pointer;
    border-radius: 3px;
    &:hover,
    &_active {
      background-color: $color-green;
      color: #fff;
    }
    &_active {
      cursor: default;
    }
  }
}
</style>