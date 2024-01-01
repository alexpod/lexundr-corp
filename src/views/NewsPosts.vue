<template lang="pug">
.page
  .container.page__title
    h1 Our posts
  PostsArticleSearch
  .posts
    .container
      PostsArticle(
        v-for="article of searchStore.posts"
        :key="article.id"
        :article="article"
      )
    PaginationPosts(
      :pages="searchStore.pageTotal"
      :page="data.page"
      v-model="data.page"
    )
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import PostsArticle from '@/components/PostsArticle.vue'
import PostsArticleSearch from '@/components/PostsArticleSearch.vue';
import PaginationPosts from '@/components/PaginationPosts.vue';

import { useSearchStore } from '@/stores/SearchStore';

const searchStore = useSearchStore();

const data = reactive({
  page: 1,
  pageLimit: 10,
  pageTotal: 0,
})


onMounted(() => {
  searchStore.getPosts(data.page, data.pageLimit) 
})

watch(() => data.page, () => {
  searchStore.getPosts(data.page, data.pageLimit)
})

</script>

<style lang="scss" scoped>

.posts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>