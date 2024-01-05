

<template lang="pug">
.page
  HeaderSection
  
  router-view
</template>
  
<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
</script>

<style lang='scss'>
@import "@/assets/scss/main";
.page {
  color: $color-gray;
  ::v-deep {
    &__title {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
.tabs {
  display: flex;
  gap: 20px;
  &__button {
    background-color: #ccc;
    padding: 5px 20px;
    border-radius: 6px;
    cursor: pointer;
  }
}
.button {
  background-color: $color-green;
  color: #fff;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:hover {
    background-color: $green-dark;
  }
}
.container {
  max-width: 800px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 600px) {
    
  }
}
</style>
