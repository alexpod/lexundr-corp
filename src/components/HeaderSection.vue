<template lang="pug">
.header
  .container.header__wrapper
    .header__logo
      router-link(
        to="/"
      )
        svg(
          xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
        )
          path(
            d="M240-240h220v-160H240v160Zm0-200h220v-280H240v280Zm260 200h220v-280H500v280Zm0-320h220v-160H500v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
            fill="#42b883"
          )
        span LexUnder
    .header__navigation
      .header__navigation-item(
        v-for="nav of data.navigation"
        :key="nav.id"
      )
        router-link(
          :to="nav.url"
        ) {{ nav.name }}
</template>

<script setup>
import { reactive, ref } from 'vue'

const data = reactive({
  navigation: [
    {
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      id: 2,
      name: 'Our Posts',
      url: 'posts',
    },
    {
      id: 3,
      name: 'About us',
      url: 'about-us',
    },
    /* {
      id: 4,
      name: 'Blog',
      url: 'blog',
    }, */
  ]
})
</script>

<style lang="scss" scoped>
.header {
  background-color: #161618;
  border-bottom: 1px solid #2e2e32;
  padding: 20px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__logo {
    svg {
      transform: rotate(90deg);
      margin-right: 5px;
    }
    a {
      color: $color-green;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
  }
  &__navigation {
    display: flex;
    a {
      color: rgba(235, 235, 245, 0.6);
      text-decoration: none;
      margin: 0 10px;
      &:hover {
        color: $color-green;
      }
      &.router-link-active {
        color: $color-green;
      }
    }
  }
}
</style>