import { defineStore } from "pinia";
import { ref } from 'vue'

const url = "https://jsonplaceholder.typicode.com/posts?";

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false)
  const posts = ref([])
  const pageTotal = ref(0)

  
  const getPosts = async (page, limit) => {
    const res = await fetch(url + new URLSearchParams({
      _page: page,
      _limit: limit,
    }));
    const data = await res.json();
    pageTotal.value = Math.ceil(res.headers.get('X-Total-Count') / limit);
    posts.value = data;
  }
  
  return {
    loader, posts, pageTotal, getPosts
  }
  
})